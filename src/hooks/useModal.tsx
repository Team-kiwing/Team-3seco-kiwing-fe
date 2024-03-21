import { useCallback } from 'react';

import { modalStore, ModalType } from '@/stores';
import { disableScrollLock, enableScrollLock } from '@/utils/bodyScrollLock';

export const useModal = () => {
  const { isOpen, title, content, callBack, openModal, closeModal } =
    modalStore();

  const BackButtonHandler = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const setModalOpen = useCallback(
    ({ title, content, callBack }: ModalType) => {
      if (
        /Android/i.test(navigator.userAgent) &&
        /Chrome/i.test(navigator.userAgent) &&
        window.matchMedia('(display-mode: standalone)').matches
      ) {
        history.pushState(null, '', '');
        window.addEventListener('popstate', BackButtonHandler);
      }
      enableScrollLock();
      openModal({
        title: title,
        content: content,
        callBack,
      });
    },
    [BackButtonHandler, openModal]
  );

  const setModalCompleteClose = useCallback(() => {
    if (
      /Android/i.test(navigator.userAgent) &&
      /Chrome/i.test(navigator.userAgent) &&
      window.matchMedia('(display-mode: standalone)').matches
    ) {
      window.removeEventListener('popstate', BackButtonHandler);
    }
    disableScrollLock();
    closeModal();
  }, [BackButtonHandler, closeModal]);

  return {
    isOpen,
    modalState: { title, content, callBack },
    setModalOpen,
    setModalCompleteClose,
  };
};
