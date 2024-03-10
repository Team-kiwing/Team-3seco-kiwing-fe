import { useMutation } from '@tanstack/react-query';

import { notify } from '@/hooks/toast';
import { useModal } from '@/hooks/useModal';
import { patchMyInfo, updateProfileImage } from '@/services/members';
import { ImageRequest, UserInfoRequest, UserInfoResponse } from '@/types';

export const useUpdateMyInfo = () => {
  const { setModalCompleteClose } = useModal();
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
          text: '회원 정보가 수정됐습니다.',
        });
        setModalCompleteClose();
        window.location.reload();
      }
    },
  });
};

export const useUpdateImage = () => {
  return useMutation({
    mutationFn: ({ file }: ImageRequest) => updateProfileImage({ file }),
  });
};
