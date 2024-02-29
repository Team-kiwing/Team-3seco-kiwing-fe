import { useState } from 'react';

import QuestionBox from '@/components/common/QuestionBox';
import useResize from '@/hooks/useResize';

import MobileRightItem from './MobileRightItem';
import { MyQuestionBoxProps } from './MyQuestionBox.type';
import PcRightItem from './PcRightItem';

const MyQuestionBox = ({ question, answer }: MyQuestionBoxProps) => {
  const [isShared, setIsShared] = useState(false);
  const { isMobileSize } = useResize();

  const rightItem = isMobileSize ? (
    <MobileRightItem />
  ) : (
    <PcRightItem
      isShared={isShared}
      setIsShared={setIsShared}
    />
  );

  return (
    <QuestionBox
      question={question}
      answer={answer}
      rightItem={rightItem}
    />
  );
};

export default MyQuestionBox;
