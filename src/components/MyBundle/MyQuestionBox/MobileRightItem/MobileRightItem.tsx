import { RxHamburgerMenu } from 'react-icons/rx';

import IconWrapper from '@/components/common/IconWrapper';
import useDropDown from '@/hooks/useDropDown';

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

  return (
    <IconWrapper
      id={triggerId}
      $size={'s'}
      $isBackground={true}
      onClick={toggleDropDown}
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
        direction={'bottom-left'}
        bundleId={bundleId}
      />
      <RxHamburgerMenu id={triggerId} />
    </IconWrapper>
  );
};

export default MobileRightItem;
