import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // Enforce email restriction
    if (email !== 'adfilyofficial@gmail.com') {
      return NextResponse.json(
        { error: 'Access denied: Unauthorized email address.' },
        { status: 403 }
      );
    }

    // Generate 6-digit numeric OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes expiration

    // Save OTP to Supabase
    const { error: dbError } = await supabaseAdmin
      .from('admin_otps')
      .insert([
        {
          email,
          otp,
          expires_at: expiresAt.toISOString(),
        },
      ]);

    if (dbError) {
      console.error('Supabase DB error saving OTP:', dbError);
      return NextResponse.json(
        { error: 'Failed to generate verification OTP.' },
        { status: 500 }
      );
    }

    // Log the OTP to terminal for verification/debugging/setup convenience
    console.log(`[ADMIN OTP] Generated OTP for adfilyofficial@gmail.com: ${otp} (expires at: ${expiresAt.toLocaleTimeString()})`);

    // Retrieve SMTP configurations
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || '587', 10);
    const secure = process.env.SMTP_SECURE === 'true' || port === 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || user;

    if (!host || !user || !pass) {
      console.warn('SMTP environment variables are not fully configured. OTP sent successfully to console log.');
      return NextResponse.json(
        { 
          message: 'OTP generated successfully. (Note: SMTP not configured, OTP printed to server console for testing.)',
          devMode: true
        },
        { status: 200 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Adfily Admin Portal" <${from}>`,
      to: email,
      subject: 'Adfily Admin Verification OTP',
      text: `Your Admin portal verification OTP code is: ${otp}. It will expire in 5 minutes.`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; box-shadow: 0 10px 25px rgba(0,0,0,0.05); color: #0b0b19;">
          <h2 style="color: #0b0b19; font-family: 'Syne', sans-serif; font-weight: 800; border-bottom: 1px solid #e2e8f0; padding-bottom: 10px;">Adfily Admin Portal</h2>
          <p style="color: #4b5563; font-size: 14px; line-height: 1.5;">A login request was made to access the Adfily Influencer Leads admin dashboard.</p>
          <div style="background-color: rgba(37, 99, 235, 0.12); border: 1px dashed #2563eb; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <span style="font-size: 24px; font-weight: bold; letter-spacing: 4px; color: #0b0b19;">${otp}</span>
          </div>
          <p style="color: #4b5563; font-size: 12px;">This verification code is active for <strong>5 minutes</strong>. If you did not request this code, please ignore this email.</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Verification OTP sent successfully to your email.' },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('API Send OTP error:', err);
    return NextResponse.json(
      { error: err.message || 'An error occurred while sending OTP.' },
      { status: 500 }
    );
  }
}
