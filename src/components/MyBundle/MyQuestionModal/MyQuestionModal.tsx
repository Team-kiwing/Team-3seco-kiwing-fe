import { useEffect, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import TagFilter from '@/components/common/TagFilter';
import Textarea from '@/components/common/Textarea';
import Toggle from '@/components/common/Toggle';
import { notify } from '@/hooks/toast';
import { useFetchTags } from '@/hooks/useFetchTags';
import { useModal } from '@/hooks/useModal';
import useResize from '@/hooks/useResize';
import { Tag } from '@/types';

import {
  AnswerValidation,
  MODAL,
  QuestionValidation,
} from './MyQuestionModal.const';
import { useCreateQuestion, useUpdateQuestion } from './MyQuestionModal.hook';
import { ButtonContainer, ModalContainer } from './MyQuestionModal.style';
import { FormField, MyQuestionModalProps } from './MyQuestionModal.type';

const MyQuestionModal = ({
  modalMode = 'add',
  questionNameField = '',
  questionAnswerField = '',
  selectedTagsField = [],
  isSharedField = false,
  bundleId,
  questionId,
  setIsToggleShared,
}: MyQuestionModalProps) => {
  const { data: tags, isLoading } = useFetchTags();
  const [selectedTags, setSelectedTags] = useState<Tag[]>(selectedTagsField);
  const [isShared, setIsShared] = useState(isSharedField);

  const { isMobileSize } = useResize();
  const { setModalCompleteClose } = useModal();
  const { mutate: createQuestion } = useCreateQuestion();
  const { mutate: updateQuestion } = useUpdateQuestion();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormField>({
    mode: 'onSubmit',
    defaultValues: {
      questionNameField,
      questionAnswerField,
      selectedTagsField,
      isSharedField,
    },
  });

  // register로 관리할 수 없는 필드는 useEffect로 관리
  useEffect(() => {
    setValue('selectedTagsField', selectedTags);
  }, [selectedTags, setValue]);

  useEffect(() => {
    setValue('isSharedField', isShared);
  }, [isShared, setValue]);

  const onValid: SubmitHandler<FormField> = ({
    questionNameField,
    questionAnswerField,
    selectedTagsField,
    isSharedField,
  }) => {
    if (modalMode === 'add') {
      createQuestion({
        content: questionNameField,
        answer: questionAnswerField,
        answerShareType: isSharedField ? 'PUBLIC' : 'PRIVATE',
        tagIds: selectedTagsField.map((tag) => tag.id),
        bundleId,
      });
    } else {
      if (!questionId) {
        return;
      }
      updateQuestion({
        content: questionNameField,
        answer: questionAnswerField,
        answerShareType: isSharedField ? 'PUBLIC' : 'PRIVATE',
        tagIds: selectedTagsField.map((tag) => tag.id),
        questionId,
      });
    }

    if (modalMode === 'edit' && setIsToggleShared) {
      setIsToggleShared(isSharedField);
    }
    setModalCompleteClose();
  };

  const onInValid: SubmitErrorHandler<{ bundleNameField: string }> = () => {
    if (errors.questionNameField?.message) {
      notify({ type: 'error', text: errors.questionNameField?.message });
    } else if (errors.questionAnswerField?.message) {
      notify({ type: 'error', text: errors.questionAnswerField?.message });
    }
  };

  if (!tags || isLoading) {
    //@TODO 추후에 스켈레톤 적용
    return null;
  }

  return (
    <ModalContainer>
      <TagFilter
        tagList={tags}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        isLimit={true}
      />
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <Textarea
          height="10rem"
          {...register('questionNameField', QuestionValidation)}
          width="100%"
          label={MODAL.QUESTION_NAME_LABEL}
          placeholder={MODAL.QUESTION_NAME_PLACEHOLDER}
          errorMessage={errors.questionNameField?.message}
        />
        <Textarea
          height="30rem"
          {...register('questionAnswerField', AnswerValidation)}
          width="100%"
          label={MODAL.QUESTION_ANSWER_LABEL}
          placeholder={MODAL.QUESTION_ANSWER_PLACEHOLDER}
          errorMessage={errors.questionAnswerField?.message}
        />
        <ButtonContainer>
          <Toggle
            on={isShared}
            onChange={() => setIsShared(!isShared)}
            height={isMobileSize ? '3.1rem' : '4rem'}
            width="15rem"
            isContentShow={true}
            fontSize="1.6rem"
            style={{
              paddingTop: '1rem',
            }}
          />
          <Button
            style={{ marginTop: '1rem' }}
            text={MODAL.SUBMIT_BUTTON_TEXT(modalMode)}
            width="100%"
            type="submit"
            height={isMobileSize ? '3.5rem' : '4.4rem'}
          />
        </ButtonContainer>
      </form>
    </ModalContainer>
  );
};

export default MyQuestionModal;
