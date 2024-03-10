import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERYKEY } from '@/constants/queryKeys';
import { notify } from '@/hooks/toast';
import { reorderQuestion } from '@/services/bundles';
import { BundleReorderRequest } from '@/types';

export const useReorderQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ bundleId, questionIds }: BundleReorderRequest) =>
      reorderQuestion({ bundleId, questionIds }),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [QUERYKEY.BUNDLE_DETAIL],
      });
    },
    onError: () => {
      notify({
        type: 'error',
        text: '꾸러미 순서를 변경하는데에 문제가 생겼습니다. 다시 시도해주세요.',
      });
    },
  });
};
