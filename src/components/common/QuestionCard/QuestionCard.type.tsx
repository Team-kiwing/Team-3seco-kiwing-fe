import { Tag } from '@/types';

export interface QuestionCardProps {
  id: number;
  question: string;
  subscribedCount: number;
  isHot: boolean;
  tags: Tag[];
  isLogin: boolean;
}
