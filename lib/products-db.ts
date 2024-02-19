import ProductModel from '@/models/Product';
import connectDB from './connect-db';
import { transformObject } from '@/common/utility/lib';
import { SearchParamsProps } from '@/common/types/lib';

export async function getProducts(searchParams: SearchParamsProps = {}) {
  try {
    await connectDB();

    const products = await ProductModel.find(transformObject(searchParams))
      .lean()
      .exec();

    const results = products.length;

    return {
      products: JSON.parse(JSON.stringify(products)),
      results,
    };
  } catch (error) {
    return { error };
  }
}

export async function getItem(slug: string) {
  try {
    await connectDB();

    const item = await ProductModel.findOne({ url: slug });

    if (item) {
      return {
        item: JSON.parse(JSON.stringify(item)),
      };
    } else {
      return { error: 'Product not found' };
    }
  } catch (error) {
    return { error };
  }
}
