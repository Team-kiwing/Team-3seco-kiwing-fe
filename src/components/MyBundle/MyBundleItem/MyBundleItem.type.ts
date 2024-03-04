import { Bundle, Tag } from '@/types';

export interface MyBundleItem {
  selectedBundle: Bundle | null;
  setSelectedBundle: (state: Bundle) => void;
  bundle: Bundle;
  isMobileSize: boolean;
  tags: Tag[];
}
