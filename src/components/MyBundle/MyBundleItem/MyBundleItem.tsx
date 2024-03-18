import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

import IconWrapper from '@/components/common/IconWrapper';
import ShadowBox from '@/components/common/ShadowBox';
import useAccordion from '@/hooks/useAccordion';
import useDropDown from '@/hooks/useDropDown';
import useResize from '@/hooks/useResize';
import { themeStore } from '@/stores';
import { Direction } from '@/types/dropdown';

import MyBundleDetail from '../MyBundleDetail';
import MyBundleDropDown from '../MyBundleDropDown';
import { useMyBundleModal } from '../MyBundleModal/MyBundleModal.hook';
import {
  BodyWrapper,
  BundleItemWrapper,
  RightItem,
  Title,
} from './MyBundleItem.style';
import { MyBundleItem } from './MyBundleItem.type';

const MyBundleItem = ({
  selectedBundleId,
  setSelectedBundleId,
  bundle,
  dragHandleProps,
}: MyBundleItem) => {
  const { isDarkMode } = themeStore();
  const { isMobileSize } = useResize();

  const {
    parentRef,
    childRef,
    isActive,
    setIsActive,
    handleClick: handleMobileClick,
  } = useAccordion();

  const { triggerId, isShow, setIsShow, closeDropDown, toggleDropDown } =
    useDropDown(`my-bundle-right-btn-${bundle.id}`);

  const [direction, setDirection] = useState<Direction>('bottom-left');

  const [isShared, setIsShared] = useState(bundle.shareType === 'PUBLIC');

  useEffect(() => {
    setIsShared(bundle.shareType === 'PUBLIC');
  }, [bundle]);

  const { handleEditBundleClick } = useMyBundleModal();

  useEffect(() => {
    // size가 바뀌면 모바일에서의 모든 active를 초기화 한다.
    setIsActive(false);
  }, [setIsActive, isMobileSize]);

  const handleWebClick = () => {
    setSelectedBundleId(bundle.id);
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
      if (selectedBundleId == null) return false;
      if (selectedBundleId === bundle.id) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <BundleItemWrapper
      key={bundle.id}
      id={String(bundle.id)}
      $isActive={isActiveItem()}
    >
      <ShadowBox
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
          width: isMobileSize ? '90%' : 'inherit',
          marginLeft: isMobileSize ? '5%' : 'inherit',
          marginRight: isMobileSize ? '5%' : 'inherit',
        }}
      >
        <Title
          onClick={isMobileSize ? handleMobileClick : handleWebClick}
          {...dragHandleProps}
        >
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
                isShared={isShared}
                setIsShared={setIsShared}
                isDropDownShow={isShow}
                setIsDropDownShow={setIsShow}
                closeDropDown={closeDropDown}
                bundle={bundle}
                direction={direction}
                handleEditBundleClick={handleEditBundleClick}
                setSelectedBundleId={setSelectedBundleId}
              />
              <RxHamburgerMenu id={triggerId} />
            </IconWrapper>
          </RightItem>
        )}
      </ShadowBox>
      {isMobileSize && (
        <BodyWrapper
          $isDarkMode={isDarkMode}
          ref={parentRef}
        >
          <div
            ref={childRef}
            style={{
              width: 'auto',
              height: '45rem',
              fontSize: 'inherit',
            }}
          >
            <MyBundleDetail
              isBundleSelected={true}
              bundleId={bundle.id}
            />
          </div>
        </BodyWrapper>
      )}
    </BundleItemWrapper>
  );
};

export default MyBundleItem;
