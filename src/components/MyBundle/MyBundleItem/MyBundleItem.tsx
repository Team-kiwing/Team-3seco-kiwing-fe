import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

import IconWrapper from '@/components/common/IconWrapper';
import ShadowBox from '@/components/common/ShadowBox';
import useDropDown from '@/hooks/useDropDown';
import useResize from '@/hooks/useResize';
import { userDataStore } from '@/stores';
import { Direction } from '@/types/dropdown';

import MyBundleDropDown from '../MyBundleDropDown';
import { useMyBundleModal } from '../MyBundleModal/MyBundleModal.hook';
import { BundleItemWrapper, RightItem, Title } from './MyBundleItem.style';
import { MyBundleItem } from './MyBundleItem.type';

const MyBundleItem = ({
  selectedBundleId,
  setSelectedBundleId,
  bundle,
  dragHandleProps,
}: MyBundleItem) => {
  const { isMobileSize } = useResize();
  const navigator = useNavigate();
  const { nickname } = userDataStore();

  const { triggerId, isShow, setIsShow, closeDropDown, toggleDropDown } =
    useDropDown(`my-bundle-right-btn-${bundle.id}`);

  const [direction, setDirection] = useState<Direction>('bottom-left');

  const [isShared, setIsShared] = useState(bundle.shareType === 'PUBLIC');

  useEffect(() => {
    setIsShared(bundle.shareType === 'PUBLIC');
  }, [bundle]);

  const { handleEditBundleClick } = useMyBundleModal();

  const handleBundleClick = () => {
    setSelectedBundleId(bundle.id);
    navigator(`/user/${nickname}/${bundle.id}`);
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

  return (
    <BundleItemWrapper
      key={bundle.id}
      id={String(bundle.id)}
      $isActive={selectedBundleId === bundle.id}
    >
      <ShadowBox
        width="100%"
        height="fit-content"
        isActive={selectedBundleId === bundle.id}
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
          onClick={handleBundleClick}
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
    </BundleItemWrapper>
  );
};

export default MyBundleItem;
