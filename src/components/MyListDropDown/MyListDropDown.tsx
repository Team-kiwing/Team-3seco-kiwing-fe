import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin5Line, RiFileCopyLine } from 'react-icons/ri';

import DropDown from '../common/DropDown';
import IconWrapper from '../common/IconWrapper';
import Toggle from '../common/Toggle';

const MyListDropDown = ({
  isDropDownShow,
  setIsDropDownShow,
  isLocked,
  setIsLocked,
}: {
  isDropDownShow: boolean;
  setIsDropDownShow: (state: boolean) => void;
  isLocked: boolean;
  setIsLocked: (state: boolean) => void;
}) => {
  const OPTIONS = [
    {
      id: 1,
      title: '공개 여부',
      rightItem: (
        <IconWrapper $size={'xs'}>
          <Toggle
            on={isLocked}
            style={{ width: '2.8rem', height: '2rem' }}
            onChange={() => {
              setIsLocked(!isLocked);
            }}
          />
        </IconWrapper>
      ),

      handler: () => {
        console.log('공개여부 클릭');
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
        console.log('링크 복사');
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
        console.log('리스트 삭제');
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
        console.log('리스트 편집');
        setIsDropDownShow(false);
      },
    },
  ];
  return (
    <DropDown
      width="120px"
      height="fit-content"
      options={OPTIONS}
      isShow={isDropDownShow}
      setIsShow={setIsDropDownShow}
      onClose={() => setIsDropDownShow(false)}
    />
  );
};

export default MyListDropDown;
