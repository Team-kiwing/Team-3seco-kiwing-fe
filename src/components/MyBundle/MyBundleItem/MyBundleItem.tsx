import { useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

import BorderBox from '@/components/common/BorderBox';
import IconWrapper from '@/components/common/IconWrapper';
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

  const handleOpenDropdown = () => {
    console.log('드롭다운 메뉴 출력');
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
      <BorderBox
        width="100%"
        height="fit-content"
        isActive={isActiveItem()}
        isHoverActive={!isMobileSize}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxSizing: 'border-box',
        }}
      >
        <Title onClick={isMobileSize ? handleMobileClick : handleWebClick}>
          {bundle.name}
        </Title>
        {isMobileSize && (
          <RightItem onClick={handleOpenDropdown}>
            <IconWrapper
              $size={'s'}
              $isBackground={true}
            >
              <RxHamburgerMenu />
            </IconWrapper>
          </RightItem>
        )}
      </BorderBox>
      {isMobileSize && (
        <BodyWrapper
          $isDarkMode={isDarkMode}
          ref={parentRef}
        >
          <BorderBox
            ref={childRef}
            width="auto"
            height="45rem"
            style={{ fontSize: 'inherit' }}
          >
            <div>{bundle.name}의 상세 질문 목록입니다.</div>
          </BorderBox>
        </BodyWrapper>
      )}
    </>
  );
};

export default MyBundleItem;
