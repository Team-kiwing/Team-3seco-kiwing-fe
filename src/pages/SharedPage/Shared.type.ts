import { BundlesBasic } from '@/types';
import { Tag } from '@/types';

export interface BundleFilterProps {
  selectedTags: Tag[];
  bundles: BundlesBasic[];
}

export interface BundleDisplayProps {
  bundles: BundlesBasic[];
  filteredBundles: BundlesBasic[];
}

export interface BundleFilterResult {
  filteredBundles: BundlesBasic[];
}
