import { ReactNode } from 'react';

export interface QuestionBoxProps {
  question: string;
  answer?: string | null;
  rightItem: ReactNode;
}
