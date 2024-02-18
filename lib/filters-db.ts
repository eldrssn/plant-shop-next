import Filters, { Filter } from '@/models/Filters';
import connectDB from './connect-db';

export async function getFilters() {
  try {
    await connectDB();

    const filters = await Filters.find({}).lean().exec();

    return {
      filters: JSON.parse(JSON.stringify(filters)).flatMap((el) => el.filters),
    };
  } catch (error) {
    return { error };
  }
}
