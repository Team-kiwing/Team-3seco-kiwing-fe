import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';

import BorderBox from '@/components/common/BorderBox';
import IconWrapper from '@/components/common/IconWrapper';
import useAccordion from '@/hooks/useAccordion';
import useDropDown from '@/hooks/useDropDown';
import useResize from '@/hooks/useResize';
import { themeStore } from '@/stores';
import { Direction } from '@/types/dropdown';

import MyBundleDetail from '../MyBundleDetail';
import MyBundleDropDown from '../MyBundleDropDown';
import { useMyBundleModal } from '../MyBundleModal/MyBundleModal.hook';
import { useFetchBundleDetail } from './MyBundleItem.hook';
import { BodyWrapper, RightItem, Title } from './MyBundleItem.style';
import { MyBundleItem } from './MyBundleItem.type';

const MyBundleItem = ({
  selectedBundle,
  setSelectedBundle,
  bundleId,
}: MyBundleItem) => {
  const { isDarkMode } = themeStore();
  const { isMobileSize } = useResize();
  const { data: bundle } = useFetchBundleDetail(bundleId);

  const {
    parentRef,
    childRef,
    isActive,
    setIsActive,
    handleClick: handleMobileClick,
  } = useAccordion();

  const { triggerId, isShow, setIsShow, closeDropDown, toggleDropDown } =
    useDropDown(`my-bundle-right-btn-${bundleId}`);

  const [direction, setDirection] = useState<Direction>('bottom-left');

  const { handleEditBundleClick } = useMyBundleModal();

  useEffect(() => {
    // size가 바뀌면 모바일에서의 모든 active를 초기화 한다.
    setIsActive(false);
  }, [setIsActive]);

  // @TODO 스켈레톤 만들기
  if (!bundle) {
    return <div>로딩 중</div>;
  }

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
              isMyBundlesEmpty={false}
              questions={bundle.questions}
            />
          </div>
        </BodyWrapper>
      )}
    </>
  );
};

export default MyBundleItem;
