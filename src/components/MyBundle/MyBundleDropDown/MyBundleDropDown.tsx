import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin5Line, RiFileCopyLine } from 'react-icons/ri';

import DropDown from '@/components/common/DropDown';
import IconWrapper from '@/components/common/IconWrapper';
import Toggle from '@/components/common/Toggle';
import { PATH } from '@/constants/router';
import { notify } from '@/hooks/toast';
import useResize from '@/hooks/useResize';
import { handleCopyClipBoard } from '@/utils/copyClip';

import { COPY_WARN_NOTIFY } from './MyBundleDropDown.const';
import { MyBundleDropDownProps } from './MyBundleDropDown.type';

const MyBundleDropDown = ({
  isDropDownShow,
  setIsDropDownShow,
  isShared,
  setIsShared,
  closeDropDown,
  bundle,
  direction,
  handleEditBundleClick,
}: MyBundleDropDownProps) => {
  const { isMobileSize } = useResize();
  const handleDeleteBundle = () => {
    confirm(`id ${bundle.id} 꾸러미를 삭제하시겠습니까?`);
    // @TODO 추후에 꾸러미 삭제 API 함수를 호출합니다.
  };

  const handleEditBundle = () => {
    handleEditBundleClick({
      bundleNameField: bundle.name,
      isSharedField: bundle.shareType === 'PUBLIC',
      selectedTagsField: bundle.tags,
    });
  };

  const options = [
    {
      id: 1,
      title: '공개 여부',
      rightItem: (
        <Toggle
          on={isShared}
          width="4rem"
        />
      ),

      handler: () => {
        setIsShared(!isShared);
        // @TODO 추후에 꾸러미 공개/비공개를 결정하는 api 로직을 연동합니다.
      },
    },

    {
      id: 2,
      title: '링크 복사',
      rightItem: (
        <IconWrapper $size={isMobileSize ? 1.8 : 'xs'}>
          <RiFileCopyLine />
        </IconWrapper>
      ),
      handler: () => {
        if (isShared) {
          const host = window.location.host;
          const pathname = `${PATH.SHARED}/${bundle.id}`;
          handleCopyClipBoard(host, pathname);
        } else {
          notify({
            type: 'warning',
            text: COPY_WARN_NOTIFY,
          });
        }
        setIsDropDownShow(false);
      },
    },
    {
      id: 3,
      title: '꾸러미 삭제',
      rightItem: (
        <IconWrapper $size={isMobileSize ? 1.8 : 'xs'}>
          <RiDeleteBin5Line />
        </IconWrapper>
      ),
      handler: () => {
        handleDeleteBundle();
        setIsDropDownShow(false);
      },
    },
    {
      id: 4,
      title: '꾸러미 편집',
      rightItem: (
        <IconWrapper $size={isMobileSize ? 1.8 : 'xs'}>
          <FiEdit3 />
        </IconWrapper>
      ),
      handler: () => {
        handleEditBundle();
        setIsDropDownShow(false);
      },
    },
  ];

  return (
    <DropDown
      width={13}
      optionHeight={5}
      options={options}
      isShow={isDropDownShow}
      setIsShow={setIsDropDownShow}
      direction={direction}
      closeDropDown={closeDropDown}
    />
  );
};

export default MyBundleDropDown;
