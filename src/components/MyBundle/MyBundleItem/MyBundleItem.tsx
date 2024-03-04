import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

import BorderBox from '@/components/common/BorderBox';
import IconWrapper from '@/components/common/IconWrapper';
import useAccordion from '@/hooks/useAccordion';
import useDropDown from '@/hooks/useDropDown';
import { themeStore } from '@/stores';
import { Direction } from '@/types/dropdown';

import MyBundleDropDown from '../MyBundleDropDown';
import { useMyBundleModal } from '../MyBundleModal/MyBundleModal.hook';
import { BodyWrapper, RightItem, Title } from './MyBundleItem.style';
import { MyBundleItem } from './MyBundleItem.type';

const MyBundleItem = ({
  selectedBundle,
  setSelectedBundle,
  bundle,
  isMobileSize,
  tags,
}: MyBundleItem) => {
  const { isDarkMode } = themeStore();

  const {
    parentRef,
    childRef,
    isActive,
    setIsActive,
    handleClick: handleMobileClick,
  } = useAccordion();

  const { triggerId, isShow, setIsShow, closeDropDown, toggleDropDown } =
    useDropDown(`my-bundle-right-btn-${bundle.id}`);

  const [isShared, setIsShared] = useState(false);
  const [direction, setDirection] = useState<Direction>('bottom-left');

  const { handleEditBundleClick } = useMyBundleModal(tags);

  useEffect(() => {
    // size가 바뀌면 모바일에서의 모든 active를 초기화 한다.
    setIsActive(false);
  }, [isMobileSize, setIsActive]);

  const handleWebClick = () => {
    setSelectedBundle(bundle);
  };

  const handleOpenDropdown = (e: React.MouseEvent) => {
    if ((e.target as Element).id === triggerId) {
      if (e.clientY > window.innerHeight / 2) {
        setDirection('top-left');
      } else {
        setDirection('bottom-left');
      }
    }

    toggleDropDown(e);
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
          <RightItem>
            <IconWrapper
              $size={'s'}
              $isBackground={true}
              onClick={handleOpenDropdown}
              id={triggerId}
              style={{
                position: 'relative',
              }}
            >
              <MyBundleDropDown
                isDropDownShow={isShow}
                setIsDropDownShow={setIsShow}
                closeDropDown={closeDropDown}
                isShared={isShared}
                setIsShared={setIsShared}
                bundle={bundle}
                direction={direction}
                handleEditBundleClick={handleEditBundleClick}
              />
              <RxHamburgerMenu id={triggerId} />
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
