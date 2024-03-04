import { useModal } from '@/hooks/useModal';

import { QuestionCardConstants } from './QuestionCard.const';
import { QuestionCardModal } from './QuestionCard.modal';

export const useReportModal = () => {
  const { setModalOpen } = useModal();
  const handleReportClick = () => {
    setModalOpen({
      title: QuestionCardConstants.MODAL_TITLE,
      content: <QuestionCardModal />,
    });
  };

  return { handleReportClick };
};
