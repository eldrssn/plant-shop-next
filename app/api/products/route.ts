import { SearchParamsProps } from '@/common/types/lib';
import connectDB from '@/lib/connect-db';
import { getProducts } from '@/lib/products-db';

// import { createErrorResponse } from '@/lib/utils';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  try {
    await connectDB();

    // const page_str = request.nextUrl.searchParams.get('page');
    //
    // const limit_str = request.nextUrl.searchParams.get('limit');

    // const page = page_str ? parseInt(page_str, 10) : 1;

    // const limit = limit_str ? parseInt(limit_str, 10) : 10;

    // const { plants, results, error } = await getPlants({ page, limit });
    const { products, results, error } = await getProducts(
      (searchParams as unknown as SearchParamsProps) || {}
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
    // error.message, 500;
  }
}

// export async function POST(request: Request) {
//   try {
//     await connectDB();

//     const body = await request.json();

//     if (!body.title) {
//       return createErrorResponse('Todo must have a title', 400);
//     }

//     const { todo, error } = await createTodo(body.title);

//     if (error) {
//       throw error;
//     }

//     let json_response = {
//       status: 'success',

//       data: {
//         todo,
//       },
//     };

//     return new NextResponse(JSON.stringify(json_response), {
//       status: 201,

//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error: any) {
//     if (error.code === 11000) {
//       return createErrorResponse('Todo with title already exists', 409);
//     }

//     return createErrorResponse(error.message, 500);
//   }
// }
