import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {

    const { data: existingRecord, error: exitingRecordFetchError } = await supabaseAdmin.from('keepalive').select('*')

    const { data, error } = await supabaseAdmin
      .from('keepalive')
      .upsert({ id: existingRecord![0].id, pinged_at: new Date().toISOString() })
      .select();

    if (error) {
      console.error('Supabase error inserting keepalive:', error);
      return NextResponse.json(
        { error: 'Failed to record keepalive ping.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Ping recorded successfully!', data },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('API keepalive error:', err);
    return NextResponse.json(
      { error: err.message || 'An error occurred.' },
      { status: 500 }
    );
  }
}
