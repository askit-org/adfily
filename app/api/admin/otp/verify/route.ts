import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const ALGORITHM = 'aes-256-cbc';
const SECRET_KEY = process.env.OTP_SECRET || 'a_very_secure_32_byte_secret_key_12345';

function encrypt(text: string): string {
  const key = crypto.scryptSync(SECRET_KEY, 'salt', 32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return `${iv.toString('hex')}:${encrypted}`;
}

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
    throw new Error('Failed to decrypt OTP payload.');
  }
}

export async function POST(req: NextRequest) {
  try {
    const { email, otp, encryptedOtp } = await req.json();

    if (!email || !otp || !encryptedOtp) {
      return NextResponse.json(
        { error: 'Email, OTP input, and encrypted token are required.' },
        { status: 400 }
      );
    }

    if (email !== 'adfilyofficial@gmail.com') {
      return NextResponse.json(
        { error: 'Access denied: Unauthorized email.' },
        { status: 403 }
      );
    }

    // Decrypt the encrypted OTP token
    let payload: { email: string; otp: string; expiresAt: number };
    try {
      const decrypted = decrypt(encryptedOtp);
      payload = JSON.parse(decrypted);
    } catch (err) {
      return NextResponse.json(
        { error: 'Invalid verification token. Please request a new code.' },
        { status: 400 }
      );
    }

    // Verify token integrity and matches
    if (payload.email !== email || payload.otp !== otp.trim()) {
      return NextResponse.json(
        { error: 'Invalid OTP code. Please check and try again.' },
        { status: 400 }
      );
    }

    // Verify expiration timestamp
    if (Date.now() > payload.expiresAt) {
      return NextResponse.json(
        { error: 'OTP has expired. Please request a new verification code.' },
        { status: 400 }
      );
    }

    // Create encrypted session token (stateless session)
    const sessionExpiryTime = Date.now() + 60 * 60 * 1000; // 1 hour session duration
    const sessionToken = encrypt(JSON.stringify({
      email,
      expiresAt: sessionExpiryTime
    }));

    // Set secure HttpOnly cookie containing session token
    const response = NextResponse.json(
      { message: 'Authentication successful. Welcome Admin!' },
      { status: 200 }
    );
    response.headers.set(
      'Set-Cookie',
      `admin_session=${sessionToken}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=3600`
    );

    return response;
  } catch (err: any) {
    console.error('API verify OTP error:', err);
    return NextResponse.json(
      { error: err.message || 'An error occurred during verification.' },
      { status: 500 }
    );
  }
}
