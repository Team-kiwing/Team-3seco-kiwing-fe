import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { QUERYKEY } from '@/constants/queryKeys';
import { notify } from '@/hooks/toast';
import { deleteBundle } from '@/services/bundles';
import { userDataStore } from '@/stores';

export const useDeleteBundle = ({
  setSelectedBundleId,
  bundleId,
}: {
  setSelectedBundleId: (state: null | number) => void;
  bundleId: number | undefined | null;
}) => {
  const queryClient = useQueryClient();
  const navigator = useNavigate();
  const { nickname } = userDataStore();

  return useMutation({
    mutationFn: (bundleId: number) => deleteBundle(bundleId),
    onSuccess: (res) => {
      if (res) {
        notify({
          type: 'success',
          text: '꾸러미를 삭제했습니다!',
        });
        if (bundleId) {
          queryClient.removeQueries({
            queryKey: [QUERYKEY.BUNDLE_DETAIL, bundleId],
          });
        }

        queryClient.refetchQueries({
          queryKey: [QUERYKEY.MY_BUNDLES],
        });

        setSelectedBundleId(null);
        navigator(`/user/${nickname}`);
      } else {
        notify({
          type: 'error',
          text: '꾸러미를 삭제하는데 문제가 생겼습니다. 다시 시도해주세요.',
        });
      }
    },
    onError: () => {
      notify({
        type: 'error',
        text: '꾸러미를 삭제하는데 문제가 생겼습니다. 다시 시도해주세요.',
      });
    },
  });
};
