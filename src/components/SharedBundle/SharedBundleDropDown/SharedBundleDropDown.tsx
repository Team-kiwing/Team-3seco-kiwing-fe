import { MdAddCircleOutline } from 'react-icons/md';
import { RiFileCopyLine } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';

import DropDown from '@/components/common/DropDown';
import IconWrapper from '@/components/common/IconWrapper';
import { handleCopyClipBoard } from '@/utils/copyClip';

import { SharedBundleDropDownWrapper } from './SharedBundleDropDown.style';
import { SharedBundleDropDownProps } from './SharedBundleDropDown.type';

/**
 * @summary 사용법    <SharedBundleDropDown
          isDropDownShow={isDropDownShow}
          setIsDropDownShow={setIsDropDownShow}
          triggerId="dropdown1-btn"
          width="14rem"
        />
        SharedBundleDropDown는 position: absolute 속성이 있습니다.
        SharedBundleDropDown 사용하는 부모컴포넌트에 무조건 position: 'relative'를 주어야 합니다. 
 * @description SharedBundleDropDown 컴포넌트
 * @param isDropDownShow 필수) SharedBundleDropDown가 보여지는 유무를 나타내는 상태값입니다.
 * @param setIsDropDownShow 필수) isDropDownShow 상태값을 set하는 함수입니다.
 * @param triggerId 필수) 드롭다운 컴포넌트가 isShow=true가 되도록 해주는 HTMLElement의 id입니다.
 * @param width 선택) width값으로 DropDown의 크기를 설정합니다. string 타입이며 기본값으로 12rem이 들어갑니다.
 * @returns
 */

const SharedBundleDropDown = ({
  isDropDownShow,
  setIsDropDownShow,
  triggerId,
  width = '12rem',
}: SharedBundleDropDownProps) => {
  const location = useLocation();
  const SERVICE_URL = window.location.host;
  const CURRENT_URL = location.pathname;

  const OPTIONS = [
    {
      id: 1,
      title: '꾸러미 추가',
      rightItem: (
        <IconWrapper $size={'xs'}>
          <MdAddCircleOutline />
        </IconWrapper>
      ),
      handler: () => {
        console.log('꾸러미가 추가되었습니다'); // 추후 실제 api 연동 과정이 필요
        setIsDropDownShow(!isDropDownShow);
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
        handleCopyClipBoard(SERVICE_URL, CURRENT_URL);
        setIsDropDownShow(!isDropDownShow);
      },
    },
  ];

  return (
    <SharedBundleDropDownWrapper $width={width}>
      <DropDown
        mode="normal"
        width={width}
        height="fit-content"
        options={OPTIONS}
        isShow={isDropDownShow}
        setIsShow={setIsDropDownShow}
        triggerId={triggerId}
      />
    </SharedBundleDropDownWrapper>
  );
};

export default SharedBundleDropDown;
