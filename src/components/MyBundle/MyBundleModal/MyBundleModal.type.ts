import { Tag } from '@/types';

export interface AddBundleModalProps {
  tags: Tag[];
  mode?: 'add' | 'edit';
  bundleNameField?: string;
  selectedTagsField?: Tag[];
  isSharedField?: boolean;
}

export interface FormField {
  bundleNameField: string;
  selectedTagsField: Tag[];
  isSharedField: boolean;
}
