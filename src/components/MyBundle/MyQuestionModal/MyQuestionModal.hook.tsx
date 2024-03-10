import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERYKEY } from '@/constants/queryKeys';
import { notify } from '@/hooks/toast';
import { useModal } from '@/hooks/useModal';
import { createQuestion, updateQuestion } from '@/services/questions';
import { QuestionCreateRequest, QuestionUpdateRequest } from '@/types';

import MyQuestionModal from '.';
import { MODAL } from './MyQuestionModal.const';
import { EditProps } from './MyQuestionModal.type';

export const useCreateQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      content,
      answer,
      answerShareType,
      tagIds,
      bundleId,
    }: QuestionCreateRequest) =>
      createQuestion({ content, answer, answerShareType, tagIds, bundleId }),
    onSuccess: () => {
      notify({
        type: 'success',
        text: MODAL.SUCCESS_NOTIFY('add'),
      });
      queryClient.refetchQueries({
        queryKey: [QUERYKEY.BUNDLE_DETAIL],
      });
    },
    onError: () => {
      notify({
        type: 'error',
        text: MODAL.ERROR_NOTIFY('add'),
      });
    },
  });
};

export const useUpdateQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      questionId,
      content,
      answer,
      answerShareType,
      tagIds,
    }: QuestionUpdateRequest) =>
      updateQuestion({ questionId, content, answer, answerShareType, tagIds }),
    onSuccess: () => {
      notify({
        type: 'success',
        text: MODAL.SUCCESS_NOTIFY('edit'),
      });
      queryClient.invalidateQueries({
        queryKey: [QUERYKEY.BUNDLE_DETAIL],
      });
    },
    onError: () => {
      notify({
        type: 'error',
        text: MODAL.ERROR_NOTIFY('edit'),
      });
    },
  });
};

export const useMyQuestionModal = (bundleId: number) => {
  const { setModalOpen } = useModal();

  const handleAddQuestionClick = () => {
    setModalOpen({
      title: MODAL.TITLE,
      content: <MyQuestionModal bundleId={bundleId} />,
    });
  };

  const handleEditQuestionClick = ({
    questionNameField,
    questionAnswerField,
    selectedTagsField,
    isSharedField,
    bundleId,
    questionId,
    setIsToggleShared,
  }: EditProps) => {
    setModalOpen({
      title: MODAL.TITLE,
      content: (
        <MyQuestionModal
          modalMode="edit"
          questionNameField={questionNameField}
          questionAnswerField={questionAnswerField}
          selectedTagsField={selectedTagsField}
          isSharedField={isSharedField}
          bundleId={bundleId}
          questionId={questionId}
          setIsToggleShared={setIsToggleShared}
        />
      ),
    });
  };

  return { handleAddQuestionClick, handleEditQuestionClick };
};
