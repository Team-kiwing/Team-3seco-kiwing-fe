import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';

import { Question, SharedType } from '@/types';

export interface MyQuestionBoxProps {
  question: Question;
  bundleId: number;
  answerShareType: SharedType;
  dragHandleProps?: DraggableProvidedDragHandleProps | null | undefined;
}
