import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

import IconWrapper from '@/components/common/IconWrapper';
import useDropDown from '@/hooks/useDropDown';
import { Direction } from '@/types/dropdown';

import MyQuestionDropDown from '../../MyQuestionDropDown';
import { MobileRightItemProps } from './MobileRightItem.type';

const MobileRightItem = ({
  isShared,
  setIsShared,
  question,
  bundleId,
}: MobileRightItemProps) => {
  const { triggerId, isShow, setIsShow, closeDropDown, toggleDropDown } =
    useDropDown(`my-question-right-btn-${question.id}`);
  const [direction, setDirection] = useState<Direction>('bottom-left');

  const handleClick = (e: React.MouseEvent) => {
    // @TODO DropDown컴포넌트 만든 후 열리는 로직 추가
    if ((e.target as Element).id === triggerId) {
      if (e.clientY > window.innerHeight / 2) {
        setDirection('top-left');
      } else {
        setDirection('bottom-left');
      }
    }
    toggleDropDown(e);
  };

  return (
    <IconWrapper
      id={triggerId}
      $size={'s'}
      $isBackground={true}
      onClick={handleClick}
      style={{
        position: 'relative',
      }}
    >
      <MyQuestionDropDown
        isShared={isShared}
        setIsShared={setIsShared}
        isShow={isShow}
        setIsShow={setIsShow}
        closeDropDown={closeDropDown}
        question={question}
        direction={direction}
        bundleId={bundleId}
      />
      <RxHamburgerMenu id={triggerId} />
    </IconWrapper>
  );
};

export default MobileRightItem;
