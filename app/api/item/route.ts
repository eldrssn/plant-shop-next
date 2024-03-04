import { NextRequest, NextResponse } from 'next/server';

import connectDB from '@/common/lib/connect-db';
import { getItem } from '@/common/lib/item-db';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params: { slug } }: { params: { slug: string } }
) {
  try {
    await connectDB();

    const { item, error } = await getItem(slug);

    if (error) {
      throw error;
    }

    let json_response = {
      status: 'success',
      item,
    };

    console.log('json_response', json_response);

    return NextResponse.json(json_response);
  } catch (error: any) {
    return console.log(error.message, 500);
  }
}
