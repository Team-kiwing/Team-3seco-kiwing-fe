import { ReactNode } from 'react';

export interface QuestionBoxProps {
  title: string;
  rightItem: ReactNode;
  body?: string;
}
