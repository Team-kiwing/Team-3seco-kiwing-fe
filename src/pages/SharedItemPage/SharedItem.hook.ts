import { useQuery } from '@tanstack/react-query';

import { getBundleDetail } from '@/services/bundles';
import { Bundle, BundleDetailRequest } from '@/types';

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
