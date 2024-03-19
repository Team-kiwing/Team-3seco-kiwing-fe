import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERYKEY } from '@/constants/queryKeys';
import { notify } from '@/hooks/toast';
import { reorderQuestion } from '@/services/bundles';
import { QuestionReorderRequest } from '@/types';

export const useReorderQuestion = (bundleId: number | null) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ bundleId, questionIds }: QuestionReorderRequest) =>
      reorderQuestion({ bundleId, questionIds }),
    onSuccess: (res) => {
      if (res) {
        if (bundleId) {
          queryClient.invalidateQueries({
            queryKey: [QUERYKEY.BUNDLE_DETAIL, bundleId],
          });
        } else {
          queryClient.invalidateQueries({
            queryKey: [QUERYKEY.BUNDLE_DETAIL],
          });
        }
      } else {
        notify({
          type: 'error',
          text: '질문 순서를 변경하는데에 문제가 생겼습니다. 다시 시도해주세요.',
        });
      }
    },
    onError: () => {
      notify({
        type: 'error',
        text: '질문 순서를 변경하는데에 문제가 생겼습니다. 다시 시도해주세요.',
      });
    },
  });
};
