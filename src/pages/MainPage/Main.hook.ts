import { useQuery } from '@tanstack/react-query';

import { searchBundles } from '@/services/bundles';
import { searchQuestion } from '@/services/questions';
import {
  BundleSearchRequest,
  BundleSearchResponse,
  QuestionSearchRequest,
  QuestionSearchResponse,
} from '@/types';

import { MAIN } from './Main.const';

export const useFetchQuestions = ({
  keyword = '',
  page = 1,
  size = 3,
}: QuestionSearchRequest) => {
  const query = useQuery<QuestionSearchResponse | null>({
    queryKey: [MAIN.QUESTIONS],
    queryFn: () =>
      searchQuestion({
        keyword,
        page,
        size,
        sortingType: 'LATEST',
        tagIds: [],
      }),
  });

  return query;
};

export const useFetchBundles = ({
  page = 1,
  size = 3,
  sortingType = 'LATEST',
}: BundleSearchRequest) => {
  const query = useQuery<BundleSearchResponse | null>({
    queryKey: [MAIN.BUNDLES],
    queryFn: () =>
      searchBundles({ page, size, sortingType, keyword: '', tagIds: [] }),
  });

  return query;
};
