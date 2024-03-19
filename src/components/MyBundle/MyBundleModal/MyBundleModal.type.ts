import { Tag } from '@/types';

export interface AddBundleModalProps {
  modalMode?: 'add' | 'edit';
  bundleId?: number;
  bundleNameField?: string;
  selectedTagsField?: Tag[];
  isSharedField?: boolean;
  setIsToggleShared?: (state: boolean) => void;
}

export interface FormField {
  bundleNameField: string;
  selectedTagsField: Tag[];
  isSharedField: boolean;
}

export interface EditProps {
  bundleNameField: string;
  selectedTagsField: Tag[];
  isSharedField: boolean;
  bundleId: number;
  setIsToggleShared?: (state: boolean) => void;
}
