import { MdAddCircleOutline } from 'react-icons/md';
import { RiFileCopyLine } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';

import DropDown from '@/components/common/DropDown';
import IconWrapper from '@/components/common/IconWrapper';

import { BundleDropDownWrapper } from './BundleDropDown.style';
import { BundleDropDownProps } from './BundleDropDown.type';

/**
 * @summary 사용법    <BundleDropDown
          isDropDownShow={isDropDownShow}
          setIsDropDownShow={setIsDropDownShow}
          triggerId="dropdown1-btn"
          width="14rem"
        />
 * @description BundleDropDown 컴포넌트
 * @param isDropDownShow 필수) BundleDropDown가 보여지는 유무를 나타내는 상태값입니다.
 * @param setIsDropDownShow 필수) isDropDownShow 상태값을 set하는 함수입니다.
 * @param triggerId 필수) 드롭다운 컴포넌트가 isShow=true가 되도록 해주는 HTMLElement의 id입니다.
 * @param width 선택) width값으로 DropDown의 크기를 설정합니다. string 타입이며 기본값으로 12rem이 들어갑니다.
 * @returns
 */

const BundleDropDown = ({
  isDropDownShow,
  setIsDropDownShow,
  triggerId,
  width = '12rem',
}: BundleDropDownProps) => {
  const location = useLocation();

  const currentURL = location.pathname;

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었습니다.');
    } catch (err) {
      console.log(err);
    }
  };
  const OPTIONS = [
    {
      id: 1,
      title: '리스트 추가',
      rightItem: (
        <IconWrapper $size={'xs'}>
          <MdAddCircleOutline />
        </IconWrapper>
      ),
      handler: () => {
        console.log('리스트 추가되었습니다'); // 추후 실제 api 연동 과정이 필요
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
        handleCopyClipBoard(currentURL);
        setIsDropDownShow(!isDropDownShow);
      },
    },
  ];

  return (
    <BundleDropDownWrapper $width={width}>
      <DropDown
        mode="normal"
        width={width}
        height="fit-content"
        options={OPTIONS}
        isShow={isDropDownShow}
        setIsShow={setIsDropDownShow}
        triggerId={triggerId}
      />
    </BundleDropDownWrapper>
  );
};

export default BundleDropDown;
