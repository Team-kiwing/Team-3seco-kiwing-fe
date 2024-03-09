import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { searchQuestion } from '@/services/questions';
import { QuestionSearchResponse, SortingType } from '@/types';

import { HubHookConstants } from './Hub.const';

export const useSearchQuestions = (
  keyword: string,
  isRecent: SortingType,
  tags: number[]
) => {
  const filterdTags = tags.length === 0 ? [] : tags.join(', ');
  const query = useQuery<QuestionSearchResponse | null>({
    queryKey: [
      'questionSearch' + keyword + tags.toString() + isRecent.toString(),
    ],
    queryFn: () =>
      searchQuestion({
        keyword,
        tagIds: filterdTags,
        sortingType: isRecent,
        page: 1,
        size: 20,
      }),
  });

  return query;
};

export const useSearchQuestionsInfinite = (
  keyword: string,
  isRecent: SortingType,
  tags: number[]
) => {
  const filterdTags = HubHookConstants.HUB_TAG_FILTERING(tags);
  const dynamicQueryKey = HubHookConstants.HUB_DYNAMIC_QUERY_KEY(
    keyword,
    filterdTags,
    isRecent
  );
  console.log(filterdTags, dynamicQueryKey);
  const query = useInfiniteQuery({
    queryKey: [dynamicQueryKey],
    queryFn: ({ pageParam }) =>
      searchQuestion({
        keyword,
        sortingType: isRecent,
        tagIds: filterdTags,
        page: pageParam,
        size: 10,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage) {
        if (
          lastPage?.pageResponse.currentPage < lastPage?.pageResponse.lastPage
        ) {
          return lastPage?.pageResponse.currentPage + 1;
        }
      }
    },
  });

  return query;
};
