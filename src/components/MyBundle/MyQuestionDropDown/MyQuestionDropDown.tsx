import { useQueryClient } from '@tanstack/react-query';
import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import DropDown from '@/components/common/DropDown';
import IconWrapper from '@/components/common/IconWrapper';
import Toggle from '@/components/common/Toggle';
import { QUERYKEY } from '@/constants/queryKeys';
import useResize from '@/hooks/useResize';

import { useDeleteQuestion } from '../MyQuestionBox/MyQuestionBox.hook';
import {
  useMyQuestionModal,
  useUpdateQuestion,
} from '../MyQuestionModal/MyQuestionModal.hook';
import { MyQuestionDropDownProps } from './MyQuestionDropDown.type';

const MyQuestionDropDown = ({
  isShow,
  setIsShow,
  isShared,
  setIsShared,
  question,
  closeDropDown,
  direction,
  bundleId,
}: MyQuestionDropDownProps) => {
  const queryClient = useQueryClient();
  const { isMobileSize } = useResize();
  const { mutate: updateQuestion } = useUpdateQuestion(bundleId);
  const { mutate: deleteQuestion } = useDeleteQuestion(bundleId);
  const { handleEditQuestionClick } = useMyQuestionModal(bundleId);

  const handleToggle = () => {
    setIsShared(!isShared);
    // @TODO 추후에 꾸러미 공개/비공개를 결정하는 api 로직을 연동합니다.
    updateQuestion({
      questionId: question.id,
      content: question.content,
      answer: question.answer,
      answerShareType: !isShared ? 'PUBLIC' : 'PRIVATE',
      tagIds: question.tags.map((tag) => tag.id),
    });

    queryClient.invalidateQueries({
      queryKey: [QUERYKEY.BUNDLE_DETAIL],
    });
  };

  const handleDeleteQuestion = () => {
    if (confirm(`질문을 삭제하시겠습니까?`)) {
      deleteQuestion(question.id);
    }
  };

  const handleEditQuestion = () => {
    handleEditQuestionClick({
      bundleId: bundleId,
      questionId: question.id,
      questionNameField: question.content,
      questionAnswerField: question.answer,
      isSharedField: question.answerShareType === 'PUBLIC',
      selectedTagsField: question.tags,
      setIsToggleShared: setIsShared,
    });
  };

  const options = [
    {
      id: 1,
      title: '공개 여부',
      rightItem: (
        <Toggle
          on={isShared}
          width="3.5rem"
        />
      ),
      handler: () => {
        handleToggle();
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
        handleEditQuestion();
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
        handleDeleteQuestion();
        setIsShow(false);
      },
    },
  ];
  return (
    <DropDown
      width={14}
      optionHeight={5}
      options={options}
      isShow={isShow}
      setIsShow={setIsShow}
      direction={direction}
      closeDropDown={closeDropDown}
    />
  );
};

export default MyQuestionDropDown;
