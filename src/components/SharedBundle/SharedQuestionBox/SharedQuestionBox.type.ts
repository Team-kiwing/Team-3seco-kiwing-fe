export interface SharedQuestionBoxProps {
  question: string;
  answer?: string;
  questionId: number;
  isChecked: boolean;
  onToggleCheck: (id: number, isChecked: boolean) => void;
}
