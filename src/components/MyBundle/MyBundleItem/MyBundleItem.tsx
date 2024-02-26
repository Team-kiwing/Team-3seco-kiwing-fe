import { useCallback, useEffect, useRef, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

import IconWrapper from '@/components/common/IconWrapper';
import ShadowBox from '@/components/common/ShadowBox';
import { themeStore } from '@/stores';

import { BodyWrapper, RightItem, Title } from './MyBundleItem.style';
import { MyBundleItem } from './MyBundleItem.type';

const MyBundleItem = ({
  selectedBundle,
  setSelectedBundle,
  bundle,
  isMobileSize,
}: MyBundleItem) => {
  const [isActive, setIsActive] = useState(false);

  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const { isDarkMode } = themeStore();

  useEffect(() => {
    if (!isMobileSize) {
      setIsActive(false);
    }
  }, [isMobileSize]);

  const handleWebClick = () => {
    if (isMobileSize) {
      setIsActive(!isActive);
    }
    setSelectedBundle(bundle);
  };

  const handleMobileClick = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0 && isActive) {
        parentRef.current.style.height = '0';
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      }
      setIsActive(!isActive);
    },
    [isActive]
  );

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
            style={{ flexShrink: 0 }}
          >
            <div>{bundle.name}의 상세 질문 목록입니다.</div>
          </ShadowBox>
        </BodyWrapper>
      )}
    </>
  );
};

export default MyBundleItem;
