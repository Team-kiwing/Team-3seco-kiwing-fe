import { useQuery } from '@tanstack/react-query';

import { getBundleDetail } from '@/services/bundles';
import { Bundle, BundleDetailRequest, Question } from '@/types';

export const useGetBundleDetail = ({
  bundleId,
  showOnlyMyQuestions,
}: BundleDetailRequest) => {
  const query = useQuery<Bundle | null>({
    queryKey: ['getBundleDetail', bundleId],
    queryFn: () => getBundleDetail({ bundleId, showOnlyMyQuestions }),
  });
  return query;
};

export const useLatestQuestions = (questions: Question[] | null) => {
  return questions?.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
};
