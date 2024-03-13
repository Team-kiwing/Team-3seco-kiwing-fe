import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Avatar from '@/components/common/Avatar';
import Button from '@/components/common/Button';
import CircleButton from '@/components/common/CircleButton';
import ImageUpload from '@/components/common/ImageUpload';
import Input from '@/components/common/Input';
import Skeleton from '@/components/common/Skeleton';
import TagFilter from '@/components/common/TagFilter';
import { useFetchTags } from '@/hooks/useFetchTags';
import useResize from '@/hooks/useResize';
import { Row } from '@/styles/globalStyles';
import { Tag } from '@/types';

import { MODAL, MODAL_LINK_VALIDATION } from './InfoUpdateModal.const';
import { useUpdateImage, useUpdateMyInfo } from './InfoUpdateModal.hook';
import {
  ButtonContainer,
  ImageUploadButtonBox,
  ModalContainer,
} from './InfoUpdateModal.style';
import {
  InfoUpdateModalForm,
  InfoUpdateModalProps,
} from './InfoUpdateModal.type';

const InfoUpdateModal = ({
  originalNickname,
  originalTags = [],
  snsLinks = [],
  profileImage,
}: InfoUpdateModalProps) => {
  // 태그 관련
  const { data: tags, isLoading } = useFetchTags();
  const [selectedTags, setSelectedTags] = useState<Tag[]>(originalTags);

  // 모바일 유무 판별 hook
  const { isMobileSize } = useResize();

  // react-hook-form 관련 (닉네임, 링크)
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<InfoUpdateModalForm>({
    mode: 'onBlur',
    defaultValues: {
      updateNickname: originalNickname.split('@')[1],
      updateGithub:
        snsLinks.length !== 0
          ? snsLinks.filter((link) => link.name === 'github')[0].url
          : '',
      updateBlog:
        snsLinks.length !== 0
          ? snsLinks.filter((link) => link.name === 'blog')[0].url
          : '',
      updateEtc:
        snsLinks.length !== 0
          ? snsLinks.filter((link) => link.name === 'etc')[0].url
          : '',
    },
  });

  // 정보 업데이트 fetch 관련
  const { mutate: onUpdateInfo } = useUpdateMyInfo();

  const onUpdateInfoForm = () => {
    const updateSnsRequests = [
      { name: 'github', url: getValues('updateGithub') },
      { name: 'blog', url: getValues('updateBlog') },
      { name: 'etc', url: getValues('updateEtc') },
    ];
    const tagIds = selectedTags.map((tag) => tag.id);

    onUpdateInfo({
      nickname: originalNickname,
      snsRequests: updateSnsRequests,
      tagIds,
    });
  };

  // 이미지 업로드 관련
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const { mutate: onImageFileUpload } = useUpdateImage();

  const handleImageFile = (file: File | null) => {
    if (file !== null) {
      onImageFileUpload({ file });
    }
  };
  const handleImageUrl = (url: string | null) => {
    setImageUrl(url);
  };

  return (
    <ModalContainer>
      <Row style={{ justifyContent: 'center' }}>
        <ImageUpload
          onImageFile={handleImageFile}
          onImageFileUrl={handleImageUrl}
          style={{ cursor: 'pointer' }}
        >
          <Row style={{ alignItems: 'end', position: 'relative' }}>
            <Avatar
              $size={isMobileSize ? 8 : 10}
              $src={imageUrl || profileImage}
            />
            <ImageUploadButtonBox>
              <CircleButton size={isMobileSize ? '4rem' : '5rem'} />
            </ImageUploadButtonBox>
          </Row>
        </ImageUpload>
      </Row>
      {isLoading ? (
        <Skeleton.Box
          $width={isMobileSize ? '20rem' : '70rem'}
          $height={isMobileSize ? '30rem' : '18rem'}
        />
      ) : (
        <TagFilter
          tagList={tags!}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          isLimit={true}
        />
      )}
      <form onSubmit={handleSubmit(onUpdateInfoForm)}>
        <div style={{ marginBottom: '1.8rem' }}>
          <Input
            {...register('updateNickname')}
            width="100%"
            label={MODAL.USER_ID_LABEL}
            placeholder={MODAL.USER_ID_PLACEHOLDER}
            isDisabled={true}
          />
        </div>
        <div style={{ marginBottom: '1.8rem' }}>
          <Input
            {...register('updateGithub', MODAL_LINK_VALIDATION)}
            width="100%"
            label={MODAL.GITHUB_LABEL}
            placeholder={MODAL.GITHUB_PLACEHOLDER}
            errorMessage={
              errors?.updateGithub?.type === 'pattern'
                ? `${MODAL.URL_ERROR}`
                : ''
            }
          />
        </div>
        <div style={{ marginBottom: '1.8rem' }}>
          <Input
            {...register('updateBlog', MODAL_LINK_VALIDATION)}
            width="100%"
            label={MODAL.BLOG_LABEL}
            placeholder={MODAL.BLOG_PLACEHOLDER}
            errorMessage={
              errors?.updateBlog?.type === 'pattern' ? `${MODAL.URL_ERROR}` : ''
            }
          />
        </div>
        <div style={{ marginBottom: '1.8rem' }}>
          <Input
            {...register('updateEtc', MODAL_LINK_VALIDATION)}
            width="100%"
            label={MODAL.ETC_LABEL}
            placeholder={MODAL.ETC_PLACEHOLDER}
            errorMessage={
              errors?.updateEtc?.type === 'pattern' ? `${MODAL.URL_ERROR}` : ''
            }
          />
        </div>
        <ButtonContainer>
          <Button
            text={MODAL.SUBMIT_BUTTON_TEXT}
            width="100%"
            type="submit"
            height={isMobileSize ? '3.5rem' : '4.4rem'}
          />
        </ButtonContainer>
      </form>
    </ModalContainer>
  );
};

export default InfoUpdateModal;
