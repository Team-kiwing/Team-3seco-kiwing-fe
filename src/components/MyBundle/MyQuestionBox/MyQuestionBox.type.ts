import { Question, SharedType } from '@/types';

export interface MyQuestionBoxProps {
  question: Question;
  bundleId: number;
  answerShareType: SharedType;
}
