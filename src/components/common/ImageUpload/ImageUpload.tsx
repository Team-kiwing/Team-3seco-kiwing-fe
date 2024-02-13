import { useRef } from 'react';
import { PropsWithChildren } from 'react';

import { ImageWrapper, Input } from './ImageUpload.style';
import { PropsImageUpload } from './ImageUpload.type';

/**
 * @summary 사용법 <ImageUpload
      onImageFileUrl={()=> {}}
      onImageFile={()=> {}}
    />
 * @description 공통 ImageUpload 컴포넌트
 * @param onImageFileUrl 부모로 업로드한 이미지의 파일의 url을 전달합니다. 
 * @param onImageFile 부모로 업로드한 이미지의 파일 자체를 전달합니다. (api 로직과 연결할때 사용합니다.)
 * @returns
 */

const ImageUpload = ({
  children,
  onImageFile,
  onImageFileUrl,
  ...props
}: PropsWithChildren<PropsImageUpload>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    const fileType = selectedFile?.type;
    const isImage = fileType?.includes('image') && !fileType.includes('gif');

    if (selectedFile && isImage) {
      const fileURL = URL.createObjectURL(selectedFile);
      onImageFile(selectedFile);
      onImageFileUrl(fileURL);
    } else {
      alert('이미지 파일만 업로드해주세요.');
    }
  };

  const handleChooseFile = () => {
    inputRef.current?.click();
  };

  return (
    <ImageWrapper
      onClick={handleChooseFile}
      {...props}
    >
      <Input
        onChange={handleChangeFile}
        ref={inputRef}
        type="file"
        accept="image/*"
      />
      {children}
    </ImageWrapper>
  );
};

export default ImageUpload;
