import { useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

import IconWrapper from '@/components/common/IconWrapper';
import ShadowBox from '@/components/common/ShadowBox';
import useAccordion from '@/hooks/useAccordion';
import { themeStore } from '@/stores';

import { BodyWrapper, RightItem, Title } from './MyBundleItem.style';
import { MyBundleItem } from './MyBundleItem.type';

const MyBundleItem = ({
  selectedBundle,
  setSelectedBundle,
  bundle,
  isMobileSize,
}: MyBundleItem) => {
  const { isDarkMode } = themeStore();

  const {
    parentRef,
    childRef,
    isActive,
    setIsActive,
    handleClick: handleMobileClick,
  } = useAccordion();

  useEffect(() => {
    // size가 바뀌면 모바일에서의 모든 active를 초기화 한다.
    setIsActive(false);
  }, [isMobileSize, setIsActive]);

  const handleWebClick = () => {
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
        onClick={isMobileSize ? handleMobileClick : handleWebClick}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxSizing: 'border-box',
        }}
      >
        <Title>{bundle.name}</Title>
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
      {isMobileSize && (
        <BodyWrapper
          $isDarkMode={isDarkMode}
          $isActive={isActive}
          ref={parentRef}
        >
          <ShadowBox
            ref={childRef}
            width="100%"
            height="45rem"
            style={{ fontSize: 'inherit' }}
          >
            <div>{bundle.name}의 상세 질문 목록입니다.</div>
          </ShadowBox>
        </BodyWrapper>
      )}
    </>
  );
};

export default MyBundleItem;
