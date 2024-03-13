import { useState } from 'react';

import QuestionBox from '@/components/common/QuestionBox';
import useResize from '@/hooks/useResize';

import MobileRightItem from './MobileRightItem';
import { MyQuestionBoxProps } from './MyQuestionBox.type';
import PcRightItem from './PcRightItem';

const MyQuestionBox = ({
  bundleId,
  answerShareType,
  question,
}: MyQuestionBoxProps) => {
  const [isShared, setIsShared] = useState(answerShareType === 'PUBLIC');

  const { isMobileSize } = useResize();

  const rightItem = isMobileSize ? (
    <MobileRightItem
      question={question}
      bundleId={bundleId}
      isShared={isShared}
      setIsShared={setIsShared}
    />
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
