import {
  InfiniteQueryObserverResult,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

import { searchBundles } from '@/services/bundles';
import { SortingType } from '@/types';

import { SharedHookConstants } from './Shared.const';

export const useSearchBundlesInfinite = (
  tagsId: number[],
  keyword: string,
  isRecent: SortingType
) => {
  const dynamicQueryKey = SharedHookConstants.SHARED_DYNAMIC_QUERY_KEY(
    keyword,
    tagsId,
    isRecent
  );

  const query = useInfiniteQuery({
    queryKey: [dynamicQueryKey],
    queryFn: ({ pageParam }) =>
      searchBundles({
        sortingType: isRecent,
        tagIds: tagsId,
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

export const useIntersectionObserver = ({
  threshold = 0.5,
  hasNextPage,
  fetchNextPage,
}: {
  threshold?: number;
  hasNextPage: boolean;
  fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold,
    });

    const target = targetRef.current;
    if (target) {
      observer.observe(target);
      return () => observer.unobserve(target);
    }
  }, [threshold, hasNextPage, fetchNextPage]);

  return { targetRef };
};
