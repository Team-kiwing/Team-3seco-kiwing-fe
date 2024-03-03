import { Bundle, Tag } from '@/types';

export interface MyBundleListProps {
  bundles: Bundle[];
  selectedBundle: Bundle | null;
  setSelectedBundle: (state: Bundle) => void;
}

export interface AddBundleModalProps {
  tags: Tag[];
}

export interface FormField {
  bundleNameField: string;
  selectedTagsField: Tag[];
  isSharedField: boolean;
}
