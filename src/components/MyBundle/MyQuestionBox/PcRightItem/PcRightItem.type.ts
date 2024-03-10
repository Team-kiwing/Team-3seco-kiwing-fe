import { Question } from '@/types';

export interface RightItemProps {
  question: Question;
  bundleId: number;
  isShared: boolean;
  setIsShared: (state: boolean) => void;
}
