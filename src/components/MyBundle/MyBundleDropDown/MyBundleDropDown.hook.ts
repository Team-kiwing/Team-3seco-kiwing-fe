import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERYKEY } from '@/constants/queryKeys';
import { notify } from '@/hooks/toast';
import { deleteBundle } from '@/services/bundles';

export const useDeleteBundle = ({
  setSelectedBundleId,
}: {
  setSelectedBundleId: (state: null | number) => void;
}) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bundleId: number) => deleteBundle(bundleId),
    onSuccess: () => {
      notify({
        type: 'success',
        text: '꾸러미를 삭제했습니다!',
      });
      queryClient.refetchQueries({
        queryKey: [QUERYKEY.MY_BUNDLES],
      });
      setSelectedBundleId(null);
    },
    onError: () => {
      notify({
        type: 'error',
        text: '꾸러미를 삭제하는데 문제가 생겼습니다. 다시 시도해주세요.',
      });
    },
  });
};
