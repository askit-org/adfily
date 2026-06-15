import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: 'Email and OTP are required.' },
        { status: 400 }
      );
    }

    if (email !== 'adfilyofficial@gmail.com') {
      return NextResponse.json(
        { error: 'Access denied: Unauthorized email.' },
        { status: 403 }
      );
    }

    // Fetch latest OTP for this email
    const { data: otpRecords, error: otpError } = await supabaseAdmin
      .from('admin_otps')
      .select('*')
      .eq('email', email)
      .order('created_at', { ascending: false })
      .limit(1);

    if (otpError) {
      console.error('Supabase DB error fetching OTP:', otpError);
      return NextResponse.json(
        { error: 'Error validating OTP.' },
        { status: 500 }
      );
    }

    if (!otpRecords || otpRecords.length === 0) {
      return NextResponse.json(
        { error: 'No OTP generated for this email. Please request a new one.' },
        { status: 400 }
      );
    }

    const record = otpRecords[0];

    // Check match
    if (record.otp !== otp.trim()) {
      return NextResponse.json(
        { error: 'Invalid OTP code. Please check and try again.' },
        { status: 400 }
      );
    }

    // Check expiration
    const expiry = new Date(record.expires_at);
    if (new Date() > expiry) {
      return NextResponse.json(
        { error: 'OTP has expired. Please request a new verification code.' },
        { status: 400 }
      );
    }

    // Create session in Supabase admin_sessions
    const sessionExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour session duration
    const { data: sessionRecords, error: sessionError } = await supabaseAdmin
      .from('admin_sessions')
      .insert([
        {
          email,
          expires_at: sessionExpiry.toISOString(),
        },
      ])
      .select();

    if (sessionError || !sessionRecords || sessionRecords.length === 0) {
      console.error('Supabase DB error inserting session:', sessionError);
      return NextResponse.json(
        { error: 'Failed to establish admin session.' },
        { status: 500 }
      );
    }

    const token = sessionRecords[0].token;

    // Set secure HttpOnly cookie containing session token
    const response = NextResponse.json(
      { message: 'Authentication successful. Welcome Admin!' },
      { status: 200 }
    );
    response.headers.set(
      'Set-Cookie',
      `admin_session=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=3600`
    );

    // Clean up used OTP
    await supabaseAdmin
      .from('admin_otps')
      .delete()
      .eq('id', record.id);

    return response;
  } catch (err: any) {
    console.error('API verify OTP error:', err);
    return NextResponse.json(
      { error: err.message || 'An error occurred during verification.' },
      { status: 500 }
    );
  }
}
