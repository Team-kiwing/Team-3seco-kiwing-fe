import { BundlesBasic } from '@/types';

export interface MyBundleListProps {
  bundles: BundlesBasic[];
  selectedBundleId: number | null;
  setSelectedBundleId: (state: number) => void;
}
