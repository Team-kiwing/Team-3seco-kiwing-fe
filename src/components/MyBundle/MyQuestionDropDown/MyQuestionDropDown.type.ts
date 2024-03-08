import { Question } from '@/types';
import { Direction } from '@/types/dropdown';

export interface MyQuestionDropDownProps {
  isShow: boolean;
  setIsShow: (state: boolean) => void;
  isShared: boolean;
  setIsShared: (state: boolean) => void;
  question: Question;
  closeDropDown: (e: Event) => void;
  direction: Direction;
}
