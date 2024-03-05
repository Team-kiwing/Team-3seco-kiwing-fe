import { useEffect, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import TagFilter from '@/components/common/TagFilter';
import Textarea from '@/components/common/Textarea';
import Toggle from '@/components/common/Toggle';
import { notify } from '@/hooks/toast';
import { useFetchTags } from '@/hooks/useFetchTags';
import useResize from '@/hooks/useResize';
import { modalStore } from '@/stores';
import { Tag } from '@/types';

import { MODAL, MyQuestionModalValidation } from './MyQuestionModal.const';
import { ButtonContainer, ModalContainer } from './MyQuestionModal.style';
import { FormField, MyQuestionModalProps } from './MyQuestionModal.type';

const MyQuestionModal = ({
  mode = 'add',
  questionNameField = '',
  questionAnswerField = '',
  selectedTagsField = [],
  isSharedField = false,
}: MyQuestionModalProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>(selectedTagsField);
  const [isShared, setIsShared] = useState(isSharedField);

  const { isMobileSize } = useResize();
  const { closeModal } = modalStore();

  const { data: tags, isLoading } = useFetchTags();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormField>({
    mode: 'onChange',
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
    // @TODO 꾸러미 생성 API 호출
    console.log(
      questionNameField,
      questionAnswerField,
      selectedTagsField,
      isSharedField
    );

    notify({
      type: 'default',
      text: MODAL.SUCCESS_NOTIFY,
    });

    closeModal();
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
      />
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <Textarea
          height="10rem"
          {...register('questionNameField', MyQuestionModalValidation)}
          width="100%"
          label={MODAL.QUESTION_NAME_LABEL}
          placeholder={MODAL.QUESTION_NAME_PLACEHOLDER}
          errorMessage={errors.questionNameField?.message}
        />
        <Textarea
          height="30rem"
          {...register('questionAnswerField', MyQuestionModalValidation)}
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
            text={MODAL.SUBMIT_BUTTON_TEXT(mode)}
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
