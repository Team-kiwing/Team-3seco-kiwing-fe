import { Bundle, BundlesBasic } from '@/types';

export interface MyBundleListProps {
  bundles: BundlesBasic[] | undefined;
  selectedBundle: Bundle | null;
  setSelectedBundle: (state: Bundle) => void;
}
