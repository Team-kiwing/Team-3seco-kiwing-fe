import { Tag } from '@/types';

export interface QuestionCardProps {
  id: number;
  content: string;
  shareCount: number;
  isHot: boolean;
  tags: Tag[];
  isLogin: boolean;
  Bundle: BundleParsed[];
}

export interface BundleParsed {
  id: number;
  name: string;
}

export interface BundleResult {
  id: number;
  name: string;
}
