import { useEffect, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import TagFilter from '@/components/common/TagFilter';
import Toggle from '@/components/common/Toggle';
import { notify } from '@/hooks/toast';
import { modalStore } from '@/stores';
import { Tag } from '@/types';

import { ButtonContainer, ModalContainer } from './MyBundleList.style';

const MyBundleModalValidation = {
  maxLength: {
    value: 20,
    message: '꾸러미 이름은 최대 20자까지 작성 가능합니다.',
  },
};

export const MyBundleModal = ({ tags }: { tags: Tag[] }) => {
  const { closeModal } = modalStore();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<{
    bundleNameField: string;
    selectedTagsField: Tag[];
    isSharedField: boolean;
  }>({
    mode: 'onChange',
    defaultValues: {
      bundleNameField: '',
      selectedTagsField: [],
      isSharedField: false,
    },
  });

  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [isShared, setIsShared] = useState(false);

  useEffect(() => {
    setValue('selectedTagsField', selectedTags); // 추가
  }, [selectedTags, setValue]);

  useEffect(() => {
    setValue('isSharedField', isShared); // 추가
  }, [isShared, setValue]);

  const onValid: SubmitHandler<{
    bundleNameField: string;
    selectedTagsField: Tag[];
    isSharedField: boolean;
  }> = ({ bundleNameField, selectedTagsField, isSharedField }) => {
    // @TODO 꾸러미 생성 API 호출
    console.log(bundleNameField, selectedTagsField, isSharedField);

    notify({
      type: 'default',
      text: '꾸러미를 생성했습니다!',
    });

    closeModal();
  };

  const onInValid: SubmitErrorHandler<{ bundleNameField: string }> = () => {
    if (errors.bundleNameField?.message) {
      notify({ type: 'error', text: errors.bundleNameField?.message });
    }
  };

  return (
    <ModalContainer>
      <TagFilter
        tagList={tags}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <Input
          {...register('bundleNameField', MyBundleModalValidation)}
          width="100%"
          label="질문 꾸러미 이름"
          placeholder={'꾸러미 이름을 입력해주세요'}
          errorMessage={errors.bundleNameField?.message}
        />
        <ButtonContainer>
          <Toggle
            on={isShared}
            onChange={() => setIsShared(!isShared)}
            height="3.1rem"
            width="15rem"
            isContentShow={true}
            fontSize="1.6rem"
            style={{
              paddingTop: '1rem',
            }}
          />
          <Button
            style={{ marginTop: '1rem' }}
            text={'추가'}
            width="100%"
            type="submit"
          />
        </ButtonContainer>
      </form>
    </ModalContainer>
  );
};
