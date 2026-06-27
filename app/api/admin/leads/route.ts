import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import crypto from 'crypto';

const ALGORITHM = 'aes-256-cbc';
const SECRET_KEY = process.env.OTP_SECRET || 'a_very_secure_32_byte_secret_key_12345';

function decrypt(text: string): string {
  try {
    const [ivHex, encryptedHex] = text.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const key = crypto.scryptSync(SECRET_KEY, 'salt', 32);
    const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
    let decrypted = decipher.update(encryptedHex, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (error) {
    throw new Error('Failed to decrypt session token.');
  }
}

export async function GET(req: NextRequest) {
  try {
    const sessionCookie = req.cookies.get('admin_session');
    const token = sessionCookie?.value;

    if (!token) {
      return NextResponse.json(
        { error: 'Unauthorized: No session token provided.' },
        { status: 401 }
      );
    }

    // Verify stateless encrypted session token
    let session: { email: string; expiresAt: number };
    try {
      const decrypted = decrypt(token);
      session = JSON.parse(decrypted);
    } catch (err) {
      return NextResponse.json(
        { error: 'Unauthorized: Invalid session token.' },
        { status: 401 }
      );
    }

    if (session.email !== 'adfilyofficial@gmail.com') {
      return NextResponse.json(
        { error: 'Unauthorized: Access denied.' },
        { status: 403 }
      );
    }

    // Check session expiration
    if (Date.now() > session.expiresAt) {
      const response = NextResponse.json(
        { error: 'Unauthorized: Session expired.' },
        { status: 401 }
      );
      // Clear cookie
      response.headers.set(
        'Set-Cookie',
        'admin_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0'
      );
      return response;
    }

    // Fetch leads from Supabase
    const { data: leads, error: leadsError } = await supabaseAdmin
      .from('influencer_registrations')
      .select('*')
      .order('created_at', { ascending: false });

    if (leadsError) {
      console.error('Supabase DB error fetching leads:', leadsError);
      return NextResponse.json(
        { error: 'Failed to retrieve registrations from database.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ leads }, { status: 200 });
  } catch (err: any) {
    console.error('API get leads error:', err);
    return NextResponse.json(
      { error: err.message || 'An error occurred fetching leads.' },
      { status: 500 }
    );
  }
}
