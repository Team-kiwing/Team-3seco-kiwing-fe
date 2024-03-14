import { useMutation } from '@tanstack/react-query';

import InfoUpdateModal from '@/components/Main/InfoUpdateModal';
import { MODAL } from '@/components/Main/InfoUpdateModal/InfoUpdateModal.const';
import { notify } from '@/hooks/toast';
import { useModal } from '@/hooks/useModal';
import { logout } from '@/services/auth';
import { userDataStore } from '@/stores';
import { TokenRequest } from '@/types';
import { removeItem } from '@/utils/localStorage';

export const useInfoUpdateModal = () => {
  const { nickname, snsList, memberTags, profileImage } = userDataStore();
  const { setModalOpen } = useModal();

  const handleInfoUpdateClick = () => {
    setModalOpen({
      title: MODAL.TITLE,
      content: (
        <InfoUpdateModal
          originalNickname={nickname}
          originalTags={memberTags}
          snsLinks={snsList}
          profileImage={profileImage}
        />
      ),
    });
  };

  return { handleInfoUpdateClick };
};

export const useLogout = () => {
  const { setUserData, setIsLogin, setAccessToken } = userDataStore();
  return useMutation({
    mutationFn: ({ refreshToken }: TokenRequest) => logout({ refreshToken }),
    onSuccess: () => {
      notify({
        type: 'success',
        text: '로그아웃 되었습니다.',
      });
      removeItem('refresh-token');
      setIsLogin(false);
      setAccessToken('');
      setUserData({
        id: null,
        nickname: '',
        profileImage: '',
        snsList: [],
        memberTags: [],
      });
    },
    onError: () => {
      notify({
        type: 'error',
        text: '로그아웃과정에서 문제가 발생했습니다. 다시 시도해주세요.',
      });
    },
  });
};
