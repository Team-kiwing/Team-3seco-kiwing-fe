import { useModal } from '@/hooks/useModal';

import MyQuestionModal from '.';
import { MODAL } from './MyQuestionModal.const';
import { FormField } from './MyQuestionModal.type';

export const useMyQuestionModal = () => {
  const { setModalOpen } = useModal();

  const handleAddBundleClick = () => {
    setModalOpen({
      title: MODAL.TITLE,
      content: <MyQuestionModal />,
    });
  };

  const handleEditBundleClick = ({
    questionNameField,
    questionAnswerField,
    selectedTagsField,
    isSharedField,
  }: FormField) => {
    setModalOpen({
      title: MODAL.TITLE,
      content: (
        <MyQuestionModal
          mode="edit"
          questionNameField={questionNameField}
          questionAnswerField={questionAnswerField}
          selectedTagsField={selectedTagsField}
          isSharedField={isSharedField}
        />
      ),
    });
  };

  return { handleAddBundleClick, handleEditBundleClick };
};
