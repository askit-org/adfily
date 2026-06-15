import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      city,
      instagramUsername,
      otherSocialLinks,
      totalFollowers,
      nicheCategory,
      avgReelViews,
      prevCollaborations,
      expectedCharges,
      aboutYourself,
    } = body;

    // Validate required fields
    if (
      !fullName ||
      !email ||
      !phone ||
      !city ||
      !instagramUsername ||
      !totalFollowers ||
      !nicheCategory ||
      !avgReelViews ||
      !expectedCharges ||
      !aboutYourself
    ) {
      return NextResponse.json(
        { error: 'Please provide all required fields.' },
        { status: 400 }
      );
    }

    // Insert into Supabase table: influencer_registrations
    const { data, error } = await supabaseAdmin
      .from('influencer_registrations')
      .insert([
        {
          full_name: fullName,
          email: email,
          phone: phone,
          city: city,
          instagram_username: instagramUsername,
          other_social_links: otherSocialLinks || null,
          total_followers: totalFollowers,
          niche_category: nicheCategory,
          avg_reel_views: avgReelViews,
          prev_collaborations: prevCollaborations || null,
          expected_charges: expectedCharges,
          about_yourself: aboutYourself,
        },
      ])
      .select();

    if (error) {
      console.error('Supabase error inserting registration:', error);
      return NextResponse.json(
        { error: 'Failed to save registration in database.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Registration submitted successfully!', data },
      { status: 200 }
    );
  } catch (err: any) {
    console.error('API register error:', err);
    return NextResponse.json(
      { error: err.message || 'An error occurred.' },
      { status: 500 }
    );
  }
}
