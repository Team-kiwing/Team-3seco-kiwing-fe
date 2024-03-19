import { MdAddCircleOutline } from 'react-icons/md';
import { RiFileCopyLine } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';

import DropDown from '@/components/common/DropDown';
import IconWrapper from '@/components/common/IconWrapper';
import { handleCopyClipBoard } from '@/utils/copyClip';

import { SharedBundleDropDownProps } from './SharedBundleDropDown.type';

/**
 * @summary 사용법    <SharedBundleDropDown
          bundleId={1}
          isShow={isShow}
          setIsShow={setIsShow}
          closeDropDown={closeDropDown}
          direction="bottom-right"
          onAddBundle={() => console.log('test')}
        /> 
 * @description SharedBundleDropDown 컴포넌트
 * @param bundleId 필수) 꾸러미의 고유한 id값입니다. number타입입니다.
 * @param isShow 필수) SharedBundleDropDown가 보여지는 유무를 나타내는 상태값입니다.
 * @param setIsShow 필수) isShow 상태값을 set하는 함수입니다.
 * @param closeDropDown 필수) 드롭다운의 닫히는 함수를 받습니다.
 * @param direction 필수) 드롭다운이 위치할 위치를 받습니다.
 * @param onAddBundle 필수) 꾸러미를 추가할 때 호출되는 함수입니다.
 * @returns
 */

const SharedBundleDropDown = ({
  isShow,
  setIsShow,
  closeDropDown,
  direction,
  onAddBundle,
}: SharedBundleDropDownProps) => {
  const location = useLocation();
  const SERVICE_URL = window.location.host;
  const CURRENT_URL = location.pathname;

  const OPTIONS = [
    {
      id: 1,
      title: '내 꾸러미에 추가',
      rightItem: (
        <IconWrapper $size={'xs'}>
          <MdAddCircleOutline />
        </IconWrapper>
      ),
      handler: () => {
        onAddBundle();
        setIsShow(false);
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
        setIsShow(false);
      },
    },
  ];

  return (
    <>
      <div>
        <DropDown
          mode="normal"
          width={13}
          optionHeight={5}
          height={10}
          closeDropDown={closeDropDown}
          options={OPTIONS}
          isShow={isShow}
          setIsShow={setIsShow}
          direction={direction}
        />
      </div>
    </>
  );
};

export default SharedBundleDropDown;
