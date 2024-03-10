import { useState } from 'react';

import QuestionBox from '@/components/common/QuestionBox';
import useResize from '@/hooks/useResize';

import MobileRightItem from './MobileRightItem';
import { MyQuestionBoxProps } from './MyQuestionBox.type';
import PcRightItem from './PcRightItem';

const MyQuestionBox = ({ bundleId, question }: MyQuestionBoxProps) => {
  const [isShared, setIsShared] = useState(false);
  const { isMobileSize } = useResize();

  const rightItem = isMobileSize ? (
    <MobileRightItem />
  ) : (
    <PcRightItem
      bundleId={bundleId}
      question={question}
      isShared={isShared}
      setIsShared={setIsShared}
    />
  );

  return (
    <QuestionBox
      question={question.content}
      answer={question.answer}
      rightItem={rightItem}
    />
  );
};

export default MyQuestionBox;
