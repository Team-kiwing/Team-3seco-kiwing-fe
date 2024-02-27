import { RxHamburgerMenu } from 'react-icons/rx';

import IconWrapper from '@/components/common/IconWrapper';

const MobileRightItem = () => {
  return (
    <IconWrapper
      $size={'s'}
      $isBackground={true}
    >
      <RxHamburgerMenu />
    </IconWrapper>
  );
};

export default MobileRightItem;
