import { useMutation, useQuery } from '@tanstack/react-query';

import { createQuestionsToBundle, getMyBundles } from '@/services/bundles';
import { BundlesBasic, SortingType } from '@/types';

export const useGetMyBundles = (sortingType: SortingType) => {
  const query = useQuery<BundlesBasic[] | null>({
    queryKey: ['getMyBundles', sortingType],
    queryFn: () => getMyBundles(sortingType),
  });
  return query;
};

export const useCreateQuestionsToBundle = () => {
  return useMutation({
    mutationFn: ({
      bundleId,
      questionIds,
    }: {
      bundleId: number;
      questionIds: number[];
    }) => createQuestionsToBundle(bundleId, questionIds),
  });
};
