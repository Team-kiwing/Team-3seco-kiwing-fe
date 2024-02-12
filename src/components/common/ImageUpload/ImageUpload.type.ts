export interface PropsImageUpload extends React.HTMLAttributes<HTMLElement> {
  onImageFile: (file: File | null) => void;
  onImageFileUrl: (file: string | null) => void;
}
