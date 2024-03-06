import { Tag } from '@/types';

export interface BundleProps {
  id: number;
  bundleName: string;
  hashTags: Tag[];
  subscribedCount: number;
  isHot: boolean;
  createdAt?: string;
  updatedAt?: string;
}
