import { Question } from '@/types';

export interface MobileRightItemProps {
  isShared: boolean;
  setIsShared: (state: boolean) => void;
  question: Question;
  bundleId: number;
}
