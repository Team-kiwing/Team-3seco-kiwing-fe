export interface Question {
  id: number;
  content: string;
  answer: string;
  answerShareType: string;
  originId: number;
  tags: { id: number; content: string }[];
  isHot: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SharedBundleBoxProps {
  questions: Question[];
}
