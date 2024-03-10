import { useInfiniteQuery } from '@tanstack/react-query';

import { searchBundles } from '@/services/bundles';
import { SortingType } from '@/types';

import { SharedHookConstants } from './Shared.const';

export const useSearchBundlesInfinite = (
  tagsId: number[],
  keyword: string,
  isRecent: SortingType
) => {
  const filteredTags = SharedHookConstants.SHARED_TAG_FILTERING(tagsId);
  const dynamicQueryKey = SharedHookConstants.SHARED_DYNAMIC_QUERY_KEY(
    keyword,
    filteredTags,
    isRecent
  );

  const query = useInfiniteQuery({
    queryKey: [dynamicQueryKey],
    queryFn: ({ pageParam }) =>
      searchBundles({
        sortingType: isRecent,
        tagIds: filteredTags,
        keyword: keyword,
        page: pageParam,
        size: 10,
      }),
    initialPageParam: 1,
    getNextPageParam: (totalPages) => {
      if (totalPages) {
        if (totalPages?.currentPage < totalPages.totalPages) {
          return totalPages?.currentPage + 1;
        }
      }
    },
  });

  return query;
};
