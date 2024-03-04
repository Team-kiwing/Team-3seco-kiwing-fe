import { useQuery } from '@tanstack/react-query';

import { searchBundles } from '@/services/bundles';
import { BundleSearchResponse } from '@/types';

export const useLatestBundles = () => {
  const query = useQuery<BundleSearchResponse | null>({
    queryKey: ['latestBundles'],
    queryFn: () =>
      searchBundles({
        sortingType: 'LATEST',
        tagIds: [],
        keyword: '',
        page: 1,
        size: 10,
      }),
  });
  return query;
};

export const usePopularBundles = () => {
  const query = useQuery<BundleSearchResponse | null>({
    queryKey: ['popularBundles'],
    queryFn: () =>
      searchBundles({
        sortingType: 'POPULAR',
        tagIds: [],
        keyword: '',
        page: 1,
        size: 10,
      }),
  });
  return query;
};

export const useLatestSelectedTagBundles = (tagsId: number[]) => {
  const LatestSelectedTagBundlesKey = tagsId.join(', ');
  const query = useQuery<BundleSearchResponse | null>({
    queryKey: [`latestSelectedTag-${LatestSelectedTagBundlesKey}`],
    queryFn: () =>
      searchBundles({
        sortingType: 'LATEST',
        tagIds: LatestSelectedTagBundlesKey,
        keyword: '',
        page: 1,
        size: 10,
      }),
  });
  return query;
};

export const usePopularSelectedTagBundles = (tagsId: number[]) => {
  const popularSelectedTagBundlesKey = tagsId.join(', ');
  const query = useQuery<BundleSearchResponse | null>({
    queryKey: [`popularSelectedTag-${popularSelectedTagBundlesKey}`],
    queryFn: async () =>
      searchBundles({
        sortingType: 'POPULAR',
        tagIds: popularSelectedTagBundlesKey,
        keyword: '',
        page: 1,
        size: 10,
      }),
  });
  return query;
};

export const useLatestSearchedBundles = (keyword: string) => {
  const query = useQuery<BundleSearchResponse | null>({
    queryKey: [`latest-${keyword}`],
    queryFn: () =>
      searchBundles({
        sortingType: 'LATEST',
        tagIds: [],
        keyword: keyword,
        page: 1,
        size: 10,
      }),
  });
  return query;
};

export const usePopularSearchedBundles = (keyword: string) => {
  const query = useQuery<BundleSearchResponse | null>({
    queryKey: [`popular-${keyword}`],
    queryFn: () =>
      searchBundles({
        sortingType: 'POPULAR',
        tagIds: [],
        keyword: keyword,
        page: 1,
        size: 10,
      }),
  });
  return query;
};
