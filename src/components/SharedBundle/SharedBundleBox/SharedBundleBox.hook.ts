import { useQuery } from '@tanstack/react-query';

import { getMyBundles } from '@/services/bundles';
import { BundlesBasic, SortingType } from '@/types';

export const useGetMyBundles = (sortingType: SortingType) => {
  const query = useQuery<BundlesBasic[] | null>({
    queryKey: ['getMyBundles', sortingType],
    queryFn: () => getMyBundles(sortingType),
  });
  return query;
};
