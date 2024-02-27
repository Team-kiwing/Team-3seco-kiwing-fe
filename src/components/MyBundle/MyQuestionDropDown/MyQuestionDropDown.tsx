import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import DropDown from '@/components/common/DropDown';
import IconWrapper from '@/components/common/IconWrapper';
import Toggle from '@/components/common/Toggle';
import useResize from '@/hooks/useResize';

import { MyQuestionDropDownProps } from './MyQuestionDropDown.type';

const MyQuestionDropDown = ({
  isShow,
  setIsShow,
  isShared,
  setIsShared,
  triggerId,
  questionId,
}: MyQuestionDropDownProps) => {
  const { isMobileSize } = useResize();

  const handleDeleteQuestion = (questionId: number) => {
    confirm(`id ${questionId} 꾸러미를 삭제하시겠습니까?`);
    // @TODO 추후에 질문 삭제 API 함수를 호출합니다.
  };

  const handleEditQuestion = (questionId: number) => {
    console.log(`id ${questionId} 꾸러미 편집`);
    // @TODO 추후에 질문 편집을 할 수 있는 모달을 띄웁니다.
  };

  const options = [
    {
      id: 1,
      title: '공개 여부',
      rightItem: <Toggle on={isShared} />,
      handler: () => {
        setIsShared(!isShared);
        // @TODO 추후에 답변 공개/비공개를 결정하는 api 로직을 연동합니다.
      },
    },
    {
      id: 2,
      title: '질문 편집',
      rightItem: (
        <IconWrapper $size={isMobileSize ? 1.8 : 'xs'}>
          <FiEdit3 />
        </IconWrapper>
      ),
      handler: () => {
        handleEditQuestion(questionId);
        setIsShow(false);
      },
    },
    {
      id: 3,
      title: '질문 삭제',
      rightItem: (
        <IconWrapper $size={isMobileSize ? 1.8 : 'xs'}>
          <RiDeleteBin5Line />
        </IconWrapper>
      ),
      handler: () => {
        handleDeleteQuestion(questionId);
        setIsShow(false);
      },
    },
  ];
  return (
    <DropDown
      width="12rem"
      height="fit-content"
      options={options}
      isShow={isShow}
      setIsShow={setIsShow}
      triggerId={triggerId}
    />
  );
};

export default MyQuestionDropDown;
