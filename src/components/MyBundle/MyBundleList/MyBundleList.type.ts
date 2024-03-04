import { Bundle } from '@/types';

export interface MyBundleListProps {
  bundles: Bundle[];
  selectedBundle: Bundle | null;
  setSelectedBundle: (state: Bundle) => void;
}
