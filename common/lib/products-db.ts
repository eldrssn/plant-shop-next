import ProductModel from '@/common/models/Product';
import connectDB from './connect-db';
import { SearchParams } from '../types';
import { getFilters, getOrder } from './utils';

export async function getProducts(searchParams: SearchParams = {}) {
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
