import { Tag } from '@/types';

export interface MyQuestionModalProps {
  modalMode?: 'add' | 'edit';
  questionNameField?: string;
  questionAnswerField?: string;
  selectedTagsField?: Tag[];
  isSharedField?: boolean;
}

export interface FormField {
  questionNameField: string;
  questionAnswerField: string;
  selectedTagsField: Tag[];
  isSharedField: boolean;
}
