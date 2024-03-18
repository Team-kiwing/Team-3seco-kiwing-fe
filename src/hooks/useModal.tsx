import { useCallback } from 'react';

import { modalStore, ModalType } from '@/stores';
import { disableScrollLock, enableScrollLock } from '@/utils/bodyScrollLock';

export const useModal = () => {
  const { isOpen, title, content, callBack, openModal, closeModal } =
    modalStore();

  const setModalOpen = useCallback(
    ({ title, content, callBack }: ModalType) => {
      enableScrollLock();
      openModal({
        title: title,
        content: content,
        callBack,
      });
    },
    [openModal]
  );

  const setModalCompleteClose = useCallback(() => {
    disableScrollLock();
    closeModal();
  }, [closeModal]);

  return {
    isOpen,
    modalState: { title, content, callBack },
    setModalOpen,
    setModalCompleteClose,
  };
};
