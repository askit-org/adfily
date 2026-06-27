import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const response = NextResponse.json(
      { message: 'Logged out successfully.' },
      { status: 200 }
    );

    // Clear session cookie
    response.headers.set(
      'Set-Cookie',
      'admin_session=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0'
    );

    return response;
  } catch (err: any) {
    console.error('API logout error:', err);
    return NextResponse.json(
      { error: err.message || 'An error occurred during logout.' },
      { status: 500 }
    );
  }
}
