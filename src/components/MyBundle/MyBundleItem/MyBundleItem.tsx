import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

import IconWrapper from '@/components/common/IconWrapper';
import ShadowBox from '@/components/common/ShadowBox';

import { RightItem, Title } from './MyBundleItem.style';
import { MyBundleItem } from './MyBundleItem.type';

const MyBundleItem = ({
  selectedBundle,
  setSelectedBundle,
  bundle,
  isMobileSize,
}: MyBundleItem) => {
  const [isActive, setIsActive] = useState(false);

  const handleItemClick = () => {
    if (isMobileSize) {
      setIsActive(!isActive);
    }
    setSelectedBundle(bundle);
  };

  const isActiveItem = () => {
    if (isMobileSize) {
      return isActive;
    } else {
      if (selectedBundle == null) return false;
      if (selectedBundle.id === bundle.id) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <>
      <ShadowBox
        width="100%"
        height="fit-content"
        isActive={isActiveItem()}
        isHoverActive={!isMobileSize}
        onClick={handleItemClick}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxSizing: 'border-box',
        }}
      >
        <Title $isMobileSize={isMobileSize}>{bundle.name}</Title>
        {isMobileSize && (
          <RightItem>
            <IconWrapper
              $size={'s'}
              $isBackground={true}
            >
              <RxHamburgerMenu />
            </IconWrapper>
          </RightItem>
        )}
      </ShadowBox>
      {isMobileSize && isActive && (
        <ShadowBox
          width="100%"
          height="400px"
          style={{ flexShrink: 0 }}
        >
          <div>{bundle.name}의 상세 질문 목록입니다.</div>
        </ShadowBox>
      )}
    </>
  );
};

export default MyBundleItem;
