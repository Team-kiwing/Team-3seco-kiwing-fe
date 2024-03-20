import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MutableRefObject } from 'react';

import { QUERYKEY } from '@/constants/queryKeys';
import { notify } from '@/hooks/toast';
import { useModal } from '@/hooks/useModal';
import { createQuestion, updateQuestion } from '@/services/questions';
import { QuestionCreateRequest, QuestionUpdateRequest } from '@/types';

import MyQuestionModal from '.';
import { MODAL } from './MyQuestionModal.const';
import { EditProps } from './MyQuestionModal.type';

export const useCreateQuestion = ({
  bundleId,
  questionsEndRef,
}: {
  bundleId: number | null | undefined;
  questionsEndRef: MutableRefObject<HTMLDivElement | null> | undefined;
}) => {
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
    onSuccess: (res) => {
      if (res) {
        notify({
          type: 'success',
          text: MODAL.SUCCESS_NOTIFY('add'),
        });
        if (bundleId) {
          queryClient.invalidateQueries({
            queryKey: [QUERYKEY.BUNDLE_DETAIL, bundleId],
          });
        } else {
          queryClient.invalidateQueries({
            queryKey: [QUERYKEY.BUNDLE_DETAIL],
          });
        }

        setTimeout(() => {
          if (questionsEndRef && questionsEndRef.current) {
            questionsEndRef.current.scrollIntoView({
              behavior: 'smooth',
            });
          }
        });
      } else {
        notify({
          type: 'error',
          text: MODAL.ERROR_NOTIFY('add'),
        });
      }
    },
    onError: () => {
      notify({
        type: 'error',
        text: MODAL.ERROR_NOTIFY('add'),
      });
    },
  });
};

export const useUpdateQuestion = (bundleId: number | null | undefined) => {
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
    onSuccess: (res) => {
      if (res) {
        notify({
          type: 'success',
          text: MODAL.SUCCESS_NOTIFY('edit'),
        });

        if (bundleId) {
          queryClient.invalidateQueries({
            queryKey: [QUERYKEY.BUNDLE_DETAIL, bundleId],
          });
        } else {
          queryClient.invalidateQueries({
            queryKey: [QUERYKEY.BUNDLE_DETAIL],
          });
        }
      } else {
        notify({
          type: 'error',
          text: MODAL.ERROR_NOTIFY('edit'),
        });
      }
    },
    onError: () => {
      notify({
        type: 'error',
        text: MODAL.ERROR_NOTIFY('edit'),
      });
    },
  });
};

export const useMyQuestionModal = (
  questionsEndRef: MutableRefObject<HTMLDivElement | null>
) => {
  const { setModalOpen } = useModal();

  const handleAddQuestionClick = (bundleId: number) => {
    setModalOpen({
      title: MODAL.TITLE,
      content: (
        <MyQuestionModal
          bundleId={bundleId}
          questionsEndRef={questionsEndRef}
        />
      ),
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
