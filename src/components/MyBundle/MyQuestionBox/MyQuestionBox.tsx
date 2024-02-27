import { useState } from 'react';

import QuestionBox from '@/components/common/QuestionBox';
import useResize from '@/hooks/useResize';

import MobileRightItem from './MobileRightItem';
import PcRightItem from './PcRightItem';

const MyQuestionBox = () => {
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
      question="브라우저 렌더링 원리에 대해 설명해주세요."
      rightItem={rightItem}
    />
  );
};

export default MyQuestionBox;
