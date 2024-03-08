import { useMutation } from '@tanstack/react-query';

import { patchMyInfo } from '@/services/members';
import { getItem } from '@/utils/localStorage';

import { UserInfoRequest } from './../../types/index';

export const useUpdateMyInfo = () => {
  //   const navigate = useNavigate();
  return useMutation({
    mutationFn: ({ nickname, snsRequests, tagIds }: UserInfoRequest) =>
      patchMyInfo({ nickname, snsRequests, tagIds }),
    onSuccess: () => {
      if (getItem('refresh-token', null)) {
        // notify({ type: 'success', text: '가입에 성공했습니다 !' });
        // navigate('/');
        window.location.href = '/';
      }
    },
  });
};
