import { useRef } from 'react';
import { PropsWithChildren } from 'react';

import { Input } from './ImageUpload.style';
import { PropsImageUpload } from './ImageUpload.type';

const ImageUpload = ({
  children,
  onImageFile,
  onImageFileUrl,
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
    <div onClick={handleChooseFile}>
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
