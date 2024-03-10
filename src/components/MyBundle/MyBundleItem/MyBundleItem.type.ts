import { BundlesBasic } from '@/types';

export interface MyBundleItem {
  selectedBundleId: number | null;
  setSelectedBundleId: (state: number) => void;
  bundle: BundlesBasic;
}
