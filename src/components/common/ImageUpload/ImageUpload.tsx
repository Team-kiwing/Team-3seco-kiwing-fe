import { useRef } from 'react';
import { PropsWithChildren } from 'react';

import { Input } from './ImageUpload.style';
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

    if (selectedFile) {
      const fileURL = URL.createObjectURL(selectedFile);
      onImageFile(selectedFile);
      onImageFileUrl(fileURL);
    } else {
      console.log('No file selected');
    }
  };

  const handleChooseFile = () => {
    inputRef.current?.click();
  };

  return (
    <div
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
    </div>
  );
};

export default ImageUpload;
