import { Tag } from '@/types';

export interface MyQuestionModalProps {
  modalMode?: 'add' | 'edit';
  questionNameField?: string;
  questionAnswerField?: string;
  selectedTagsField?: Tag[];
  isSharedField?: boolean;
  bundleId: number;
  questionId?: number;
  setIsToggleShared?: (state: boolean) => void;
}

export interface FormField {
  questionNameField: string;
  questionAnswerField: string;
  selectedTagsField: Tag[];
  isSharedField: boolean;
}

export interface EditProps {
  questionNameField: string;
  questionAnswerField: string;
  selectedTagsField: Tag[];
  isSharedField: boolean;
  bundleId: number;
  questionId?: number;
  setIsToggleShared?: (state: boolean) => void;
}
