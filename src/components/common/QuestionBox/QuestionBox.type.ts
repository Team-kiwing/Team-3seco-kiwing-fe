import { ReactNode } from 'react';
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';

import { Question } from '@/types';

export interface QuestionBoxProps {
  question: string;
  answer?: string | null;
  rightItem: ReactNode;
  isEditMode?: boolean;
  questionObj?: Question;
  bundleId: number;
  dragHandleProps?: DraggableProvidedDragHandleProps | null | undefined;
}
