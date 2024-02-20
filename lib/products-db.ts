import ProductModel from '@/models/Product';
import connectDB from './connect-db';
import { getFilters, getOrder } from '@/common/utility/lib';
import { SearchParamsProps } from '@/common/types/lib';

export async function getProducts(searchParams: SearchParamsProps = {}) {
  try {
    await connectDB();

    const products = await ProductModel.find(getFilters(searchParams))
      .sort(getOrder(searchParams?.order))
      .lean()
      .exec();

    return {
      products: JSON.parse(JSON.stringify(products)),
      results: products.length,
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
