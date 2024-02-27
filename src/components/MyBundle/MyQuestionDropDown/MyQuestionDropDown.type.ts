export interface MyQuestionDropDownProps {
  isShow: boolean;
  setIsShow: (state: boolean) => void;
  isShared: boolean;
  setIsShared: (state: boolean) => void;
  triggerId: string;
  questionId: number;
}
