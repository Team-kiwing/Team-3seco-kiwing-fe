import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin5Line, RiFileCopyLine } from 'react-icons/ri';

import DropDown from '@/components/common/DropDown';
import IconWrapper from '@/components/common/IconWrapper';
import Toggle from '@/components/common/Toggle';
import { PATH } from '@/constants/router';

import { MyBundleDropDownProps } from './MyBundleDropDown.type';

const MyBundleDropDown = ({
  isDropDownShow,
  setIsDropDownShow,
  isShared,
  setIsShared,
  triggerId,
  bundleId,
}: MyBundleDropDownProps) => {
  const handleCopyClipBoard = async (text: string) => {
    try {
      const SERVICE_URL = window.location.host;
      await navigator.clipboard.writeText(`${SERVICE_URL}${text}`);
      // @TODO 추후에 alert -> 토스트 알림으로 변경합니다.
      alert('클립보드에 링크가 복사되었습니다.');
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteBundle = (bundleId: number) => {
    console.log(`id ${bundleId} 꾸러미 삭제`);
    // @TODO 추후에 꾸러미 삭제 API 함수를 호출합니다.
  };

  const handleEditBundle = (bundleId: number) => {
    console.log(`id ${bundleId} 꾸러미 편집`);
    // @TODO 추후에 꾸러미 편집을 할 수 있는 모달을 띄웁니다.
  };

  const options = [
    {
      id: 1,
      title: '공개 여부',
      rightItem: <Toggle on={isShared} />,

      handler: () => {
        setIsShared(!isShared);
        // @TODO 추후에 꾸러미 공개/비공개를 결정하는 api 로직을 연동합니다.
      },
    },

    {
      id: 2,
      title: '링크 복사',
      rightItem: (
        <IconWrapper $size={'xs'}>
          <RiFileCopyLine />
        </IconWrapper>
      ),
      handler: () => {
        if (isShared) {
          handleCopyClipBoard(`${PATH.SHARED}/${bundleId}`);
        } else {
          // @TODO 추후에 alert -> 토스트 알림으로 변경합니다.
          alert('공개된 리스트만 링크를 복사할 수 있습니다.');
        }
        setIsDropDownShow(false);
      },
    },
    {
      id: 3,
      title: '리스트 삭제',
      rightItem: (
        <IconWrapper $size={'xs'}>
          <RiDeleteBin5Line />
        </IconWrapper>
      ),
      handler: () => {
        handleDeleteBundle(bundleId);
        setIsDropDownShow(false);
      },
    },
    {
      id: 4,
      title: '리스트 편집',
      rightItem: (
        <IconWrapper $size={'xs'}>
          <FiEdit3 />
        </IconWrapper>
      ),
      handler: () => {
        handleEditBundle(bundleId);
        setIsDropDownShow(false);
      },
    },
  ];

  return (
    <DropDown
      width="120px"
      height="fit-content"
      options={options}
      isShow={isDropDownShow}
      setIsShow={setIsDropDownShow}
      triggerId={triggerId}
    />
  );
};

export default MyBundleDropDown;
