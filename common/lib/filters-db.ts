import Filters from '@/common/models/Filters';
import connectDB from './connect-db';
import { getSearchParamsFilters } from './utils';
import { SearchParams } from '../types';

export async function getFiltersList(searchParams: SearchParams = {}) {
  try {
    await connectDB();
    const filters = await Filters.find(
      getSearchParamsFilters(searchParams?.type)
    )
      .lean()
      .exec();

    return {
      filters: JSON.parse(JSON.stringify(filters)).flatMap(
        (el: any) => el.filters
      ),
    };
  } catch (error) {
    return { error };
  }
}
