import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERYKEY } from '@/constants/queryKeys';
import { notify } from '@/hooks/toast';
import { reorderBundle } from '@/services/bundles';
import { BundleReorderRequest } from '@/types';

export const useReorderBundle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ bundleIds }: BundleReorderRequest) =>
      reorderBundle({ bundleIds }),
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: [QUERYKEY.MY_BUNDLES],
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
