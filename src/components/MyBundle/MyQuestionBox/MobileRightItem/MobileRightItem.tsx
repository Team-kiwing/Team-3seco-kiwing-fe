import { RxHamburgerMenu } from 'react-icons/rx';

import IconWrapper from '@/components/common/IconWrapper';

const MobileRightItem = () => {
  const handleClick = () => {
    // @TODO DropDown컴포넌트 만든 후 열리는 로직 추가
    console.log('드롭다운');
  };

  return (
    <IconWrapper
      id="my-question-dropdown-btn"
      $size={'s'}
      $isBackground={true}
      onClick={handleClick}
    >
      <RxHamburgerMenu />
    </IconWrapper>
  );
};

export default MobileRightItem;
