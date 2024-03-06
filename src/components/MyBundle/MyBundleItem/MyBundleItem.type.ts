import { Bundle } from '@/types';

export interface MyBundleItem {
  selectedBundle: Bundle | null;
  setSelectedBundle: (state: Bundle) => void;
  bundle: Bundle;
  isMobileSize: boolean;
}
