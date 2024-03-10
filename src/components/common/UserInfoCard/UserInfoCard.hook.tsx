import InfoUpdateModal from '@/components/Main/InfoUpdateModal';
import { MODAL } from '@/components/Main/InfoUpdateModal/InfoUpdateModal.const';
import { useModal } from '@/hooks/useModal';
import { userDataStore } from '@/stores';

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
