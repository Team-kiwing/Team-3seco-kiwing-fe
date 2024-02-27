interface tagProps {
  id: number;
  tagName: string;
}
export interface QuestionCardProps {
  id: number;
  question: string;
  subscribedCount: number;
  isHot: boolean;
  hashTags: tagProps[];
}
