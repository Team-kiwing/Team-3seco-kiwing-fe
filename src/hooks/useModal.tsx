import { useCallback } from 'react';

import { modalStore, ModalType } from '@/stores';

export const useModal = () => {
  const { isOpen, title, content, callBack, openModal, closeModal } =
    modalStore();

  const setModalOpen = useCallback(
    ({ title, content, callBack }: ModalType) => {
      openModal({
        title: title,
        content: content,
        callBack,
      });
    },
    [openModal]
  );

  const setModalClose = useCallback(() => {
    closeModal();
  }, [closeModal]);

  return {
    isOpen,
    modalState: { title, content, callBack },
    setModalOpen,
    setModalClose,
  };
};
