import { useModal } from '@/hooks/useModal';

import PolicyModal from './PolicyModal';
import { MODAL } from './PolicyModal.const';

export const usePolicyModal = () => {
  const { setModalOpen } = useModal();

  const handlePolicyClick = () => {
    setModalOpen({
      title: MODAL.TITLE,
      content: <PolicyModal />,
    });
  };

  return { handlePolicyClick };
};
