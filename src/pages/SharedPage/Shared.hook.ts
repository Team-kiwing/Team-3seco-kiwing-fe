import { useQuery } from '@tanstack/react-query';

import { searchBundles } from '@/services/bundles';
import { BundleSearchResponse } from '@/types';

export const useLatestBundles = (tagsId: number[], keyword: string) => {
  const LatestSelectedTagBundlesKey =
    tagsId.length === 0 ? [] : tagsId.join(', ');
  const query = useQuery<BundleSearchResponse | null>({
    queryKey: [
      `latest-${keyword}-${typeof LatestSelectedTagBundlesKey === 'string' ? LatestSelectedTagBundlesKey : ''}`,
    ],
    queryFn: () =>
      searchBundles({
        sortingType: 'LATEST',
        tagIds: LatestSelectedTagBundlesKey,
        keyword: keyword,
        page: 1,
        size: 30,
      }),
  });
  return query;
};

export const usePopularBundles = (tagsId: number[], keyword: string) => {
  const LatestSelectedTagBundlesKey =
    tagsId.length === 0 ? [] : tagsId.join(', ');
  const query = useQuery<BundleSearchResponse | null>({
    queryKey: [
      `popular-${keyword}-${typeof LatestSelectedTagBundlesKey === 'string' ? LatestSelectedTagBundlesKey : ''}`,
    ],
    queryFn: () =>
      searchBundles({
        sortingType: 'POPULAR',
        tagIds: LatestSelectedTagBundlesKey,
        keyword: keyword,
        page: 1,
        size: 30,
      }),
  });
  return query;
};
