import { ReactNode } from 'react';

export interface QuestionBoxProps {
  question: string;
  answer?: string;
  rightItem: ReactNode;
}
