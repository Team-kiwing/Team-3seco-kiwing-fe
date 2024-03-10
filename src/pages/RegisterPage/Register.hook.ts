import { useMutation } from '@tanstack/react-query';

import { notify } from '@/hooks/toast';
import { patchMyInfo } from '@/services/members';
import { UserInfoRequest, UserInfoResponse } from '@/types';

export const useUpdateMyInfo = () => {
  return useMutation({
    mutationFn: ({ nickname, snsRequests, tagIds }: UserInfoRequest) =>
      patchMyInfo({ nickname, snsRequests, tagIds }),
    onSuccess: (res: UserInfoResponse | string) => {
      if (typeof res === 'string') {
        if (res.includes('400')) {
          notify({
            type: 'warning',
            text: '사용자 아이디가 중복됐습니다.',
          });
        }
      } else {
        notify({
          type: 'success',
          text: '회원가입에 성공했습니다.',
        });
        window.location.href = '/';
      }
    },
  });
};
