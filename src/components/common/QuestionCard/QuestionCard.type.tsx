import { Tag } from '@/types';

export interface QuestionCardProps {
  id: number;
  content: string;
  shareCount: number;
  isHot: boolean;
  tags: Tag[];
  isLogin: boolean;
}
