import ProductModel from '@/models/Product';
import connectDB from './connect-db';

interface Filter {
  page?: number;
  limit?: number;
}

export async function getProducts(filter: Filter = {}) {
  try {
    await connectDB();

    // const page = filter.page ?? 1;
    // const limit = filter.limit ?? 10;
    // const skip = (page - 1) * limit;

    const products = await ProductModel.find({}).lean().exec();
    // .skip(skip).limit(limit).lean().exec();

    const results = products.length;

    return {
      products: JSON.parse(JSON.stringify(products)),
      // page,
      // limit,
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
