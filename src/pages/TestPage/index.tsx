import { useState } from 'react';
import { FiEdit3, FiToggleLeft } from 'react-icons/fi';
import { RiDeleteBin5Line, RiFileCopyLine } from 'react-icons/ri';

import DropDown from '@/components/common/DropDown';
import IconWrapper from '@/components/common/IconWrapper';
import { Col } from '@/styles/globalStyles';

const OPTIONS = [
  {
    id: 1,
    title: '공개 여부',
    rightItem: (
      <IconWrapper $size={'xs'}>
        <FiToggleLeft />
      </IconWrapper>
    ),
    handler: () => console.log('공개여부'),
  },
  {
    id: 2,
    title: '링크 복사',
    rightItem: (
      <IconWrapper $size={'xs'}>
        <RiFileCopyLine />
      </IconWrapper>
    ),
    handler: () => console.log('링크 복사'),
  },
  {
    id: 3,
    title: '리스트 삭제',
    rightItem: (
      <IconWrapper $size={'xs'}>
        <RiDeleteBin5Line />
      </IconWrapper>
    ),
    handler: () => console.log('리스트 삭제'),
  },
  {
    id: 4,
    title: '리스트 편집',
    rightItem: (
      <IconWrapper $size={'xs'}>
        <FiEdit3 />
      </IconWrapper>
    ),
    handler: () => console.log('리스트 편집'),
  },
];

const OPTIONS2 = [
  {
    id: 1,
    title: '삼성 질문 리스트',
    body: '이미 이 질문이 추가된 적이 있어요!',
    rightItem: <input type="checkbox" />,
    handler: () => console.log('selected'),
  },
  {
    id: 2,
    title: '링크 복사',
    rightItem: (
      <IconWrapper $size={'xs'}>
        <RiFileCopyLine />
      </IconWrapper>
    ),
    handler: () => console.log('링크 복사'),
  },
  {
    id: 3,
    title: '리스트 삭제',
    rightItem: (
      <IconWrapper $size={'xs'}>
        <RiDeleteBin5Line />
      </IconWrapper>
    ),
    handler: () => console.log('리스트 삭제'),
  },
  {
    id: 4,
    title: '리스트 편집',
    rightItem: (
      <IconWrapper $size={'xs'}>
        <FiEdit3 />
      </IconWrapper>
    ),
    handler: () => console.log('리스트 편집'),
  },
];

const TestPage = () => {
  // 요기다가 하시면 됩니다
  const [isDropDownShow, setIsDropDownShow] = useState(false);

  const handleClick = () => {
    setIsDropDownShow(true);
  };

  //각 option마다의 handler를 어떻게 부여하지???

  return (
    <>
      <div>테스트 페이지 입니다.</div>
      <Col>
        <button
          style={{ width: 'fit-content', backgroundColor: 'pink' }}
          onClick={handleClick}
        >
          드롭다운
        </button>
        <DropDown
          width="120px"
          height="fit-content"
          options={OPTIONS}
          isShow={isDropDownShow}
          onClose={() => setIsDropDownShow(false)}
        />
        <DropDown
          width="200px"
          options={OPTIONS2}
          isShow={isDropDownShow}
          onClose={() => setIsDropDownShow(false)}
        />
      </Col>
    </>
  );
};

export default TestPage;
