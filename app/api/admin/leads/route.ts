import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

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

    // Verify session in Supabase admin_sessions
    const { data: sessions, error: sessionError } = await supabaseAdmin
      .from('admin_sessions')
      .select('*')
      .eq('token', token)
      .limit(1);

    if (sessionError) {
      console.error('Supabase DB error fetching session:', sessionError);
      return NextResponse.json(
        { error: 'Internal server error verifying session.' },
        { status: 500 }
      );
    }

    if (!sessions || sessions.length === 0) {
      return NextResponse.json(
        { error: 'Unauthorized: Invalid session token.' },
        { status: 401 }
      );
    }

    const session = sessions[0];

    // Check expiration
    if (new Date() > new Date(session.expires_at)) {
      // Session expired, delete it from DB
      await supabaseAdmin.from('admin_sessions').delete().eq('token', token);
      
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

    // Fetch leads
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
