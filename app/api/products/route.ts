import { NextRequest, NextResponse } from 'next/server';

import connectDB from '@/common/lib/connect-db';
import { getProducts } from '@/common/lib/products-db';
import { convertSlugsToObject } from '@/common/utils';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params: { slugs } }: { params: { slugs?: string[] } }
) {
  try {
    await connectDB();

    const { products, results, error } = await getProducts(
      convertSlugsToObject(slugs)
    );

    if (error) {
      throw error;
    }

    let json_response = {
      status: 'success',
      results,
      products,
    };

    console.log('json_response', json_response);

    return NextResponse.json(json_response);
  } catch (error: any) {
    return console.log(error.message, 500);
  }
}
