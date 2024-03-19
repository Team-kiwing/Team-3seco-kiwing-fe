import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERYKEY } from '@/constants/queryKeys';
import { notify } from '@/hooks/toast';
import { deleteQuestion } from '@/services/questions';

export const useDeleteQuestion = (bundleId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (questionId: number) => deleteQuestion(questionId),
    onSuccess: (res) => {
      if (res) {
        notify({
          type: 'success',
          text: '질문을 삭제했습니다!',
        });
        queryClient.invalidateQueries({
          queryKey: [QUERYKEY.BUNDLE_DETAIL, bundleId],
        });
      } else {
        notify({
          type: 'error',
          text: '질문을 삭제하는데 문제가 생겼습니다. 다시 시도해주세요.',
        });
      }
    },
    onError: () => {
      notify({
        type: 'error',
        text: '질문을 삭제하는데 문제가 생겼습니다. 다시 시도해주세요.',
      });
    },
  });
};
