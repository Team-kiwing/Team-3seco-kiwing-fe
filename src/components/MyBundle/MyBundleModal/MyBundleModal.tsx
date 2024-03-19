import { useEffect, useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { Tooltip } from 'react-tooltip';
import { useTheme } from 'styled-components';

import BorderBox from '@/components/common/BorderBox';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import Skeleton from '@/components/common/Skeleton';
import TagFilter from '@/components/common/TagFilter';
import Toggle from '@/components/common/Toggle';
import { notify } from '@/hooks/toast';
import { useFetchTags } from '@/hooks/useFetchTags';
import { useModal } from '@/hooks/useModal';
import useResize from '@/hooks/useResize';
import { Tag } from '@/types';

import { MODAL, MyBundleModalValidation } from './MyBundleModal.const';
import { useCreateBundle, useUpdateBundle } from './MyBundleModal.hook';
import {
  ButtonContainer,
  ModalContainer,
  TagFilterContainer,
  Text,
  TooltipContainer,
} from './MyBundleModal.style';
import { AddBundleModalProps, FormField } from './MyBundleModal.type';

const MyBundleModal = ({
  modalMode = 'add',
  bundleId,
  bundleNameField = '',
  selectedTagsField = [],
  isSharedField = false,
  setIsToggleShared,
}: AddBundleModalProps) => {
  const theme = useTheme();
  const { data: tags } = useFetchTags();
  const [selectedTags, setSelectedTags] = useState<Tag[]>(selectedTagsField);
  const [isShared, setIsShared] = useState(isSharedField);

  const { isMobileSize } = useResize();
  const { setModalCompleteClose } = useModal();
  const { mutate: createBundle } = useCreateBundle();
  const { mutate: updateBundle } = useUpdateBundle();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormField>({
    mode: 'onSubmit',
    defaultValues: {
      bundleNameField,
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
    bundleNameField,
    selectedTagsField,
    isSharedField,
  }) => {
    if (modalMode === 'add') {
      createBundle({
        name: bundleNameField,
        shareType: isSharedField ? 'PUBLIC' : 'PRIVATE',
        tagIds: selectedTagsField.map((tag) => tag.id),
      });
    } else {
      if (!bundleId) {
        return;
      }
      updateBundle({
        bundleId: bundleId,
        name: bundleNameField,
        shareType: isSharedField ? 'PUBLIC' : 'PRIVATE',
        tagIds: selectedTagsField.map((tag) => tag.id),
      });
    }

    if (modalMode === 'edit' && setIsToggleShared) {
      setIsToggleShared(isSharedField);
    }

    setModalCompleteClose();
  };

  const onInValid: SubmitErrorHandler<{ bundleNameField: string }> = () => {
    if (errors.bundleNameField?.message) {
      notify({ type: 'error', text: errors.bundleNameField?.message });
    }
  };

  return (
    <ModalContainer>
      {tags ? (
        <TagFilterContainer>
          <Text>꾸러미 주제와 어울리는 태그를 선택해보세요!</Text>
          <TagFilter
            tagList={tags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            isLimit={true}
          />
        </TagFilterContainer>
      ) : (
        <BorderBox
          width="100%"
          height="10rem"
        >
          <Skeleton.Paragraph
            $width="50rem"
            $height="2rem"
            $line={3}
          />
        </BorderBox>
      )}

      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <Input
          {...register('bundleNameField', MyBundleModalValidation)}
          width="100%"
          label={MODAL.BUNDLE_NAME_LABEL}
          placeholder={MODAL.BUNDLE_NAME_PLACEHOLDER}
          errorMessage={errors.bundleNameField?.message}
        />
        <ButtonContainer>
          <TooltipContainer>
            <a
              data-tooltip-id="my-bundle-modal-toggle-tooltip"
              data-tooltip-content={
                isShared
                  ? '꾸러미를 공개 상태로 생성합니다.'
                  : '꾸러미를 비공개 상태로 생성합니다.'
              }
              data-tooltip-delay-show={500}
            >
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
            </a>
            <Tooltip
              id="my-bundle-modal-toggle-tooltip"
              style={{
                backgroundColor: theme.symbol_secondary_color,
              }}
            />
          </TooltipContainer>
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

export default MyBundleModal;
