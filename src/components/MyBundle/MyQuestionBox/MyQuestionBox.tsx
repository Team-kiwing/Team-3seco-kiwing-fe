import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import QuestionBox from '@/components/common/QuestionBox';
import { QUERYKEY } from '@/constants/queryKeys';
import useResize from '@/hooks/useResize';

import MobileRightItem from './MobileRightItem';
import { MyQuestionBoxProps } from './MyQuestionBox.type';
import PcRightItem from './PcRightItem';

const MyQuestionBox = ({
  bundleId,
  answerShareType,
  question,
}: MyQuestionBoxProps) => {
  const queryClient = useQueryClient();
  const [isShared, setIsShared] = useState(answerShareType === 'PUBLIC');

  useEffect(() => {
    queryClient.refetchQueries({
      queryKey: [QUERYKEY.BUNDLE_DETAIL],
    });
    setIsShared(answerShareType === 'PUBLIC');
  }, [answerShareType]);

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
