export interface PropsImageUpload {
  onImageFile: (file: File | null) => void;
  onImageFileUrl: (file: string | null) => void;
}
