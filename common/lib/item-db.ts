import ProductModel from '@/common/models/Product';
import connectDB from './connect-db';

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
