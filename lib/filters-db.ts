import Filters from '@/models/Filters';
import connectDB from './connect-db';
import { SearchParamsProps } from '@/common/types/lib';
import { getSearchParamsFilters } from '@/common/utility/lib';

export async function getFiltersList(searchParams: SearchParamsProps = {}) {
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
