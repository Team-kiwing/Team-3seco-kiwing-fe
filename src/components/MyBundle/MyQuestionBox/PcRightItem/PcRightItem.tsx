import { useQueryClient } from '@tanstack/react-query';
import { FiEdit3, FiTrash2 } from 'react-icons/fi';

import IconWrapper from '@/components/common/IconWrapper';
import Toggle from '@/components/common/Toggle';
import { QUERYKEY } from '@/constants/queryKeys';

import {
  useMyQuestionModal,
  useUpdateQuestion,
} from '../../MyQuestionModal/MyQuestionModal.hook';
import { useDeleteQuestion } from '../MyQuestionBox.hook';
import { Container, IconContainer } from './PcRightItem.style';
import { RightItemProps } from './PcRightItem.type';

const PcRightItem = ({
  question,
  bundleId,
  isShared,
  setIsShared,
}: RightItemProps) => {
  const queryClient = useQueryClient();
  const { handleEditQuestionClick } = useMyQuestionModal(bundleId);
  const { mutate: deleteQuestion } = useDeleteQuestion(bundleId);

  const { mutate: updateQuestion } = useUpdateQuestion();
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

  const handleDeleteQuestion = () => {
    if (confirm(`질문을 삭제하시겠습니까?`)) {
      deleteQuestion(question.id);
    }
  };

  return (
    <Container>
      <Toggle
        on={isShared}
        onChange={handleToggle}
        isBackgroundGray={true}
        isContentShow={true}
        width="7rem"
        height="2.5rem"
        fontSize="1.2rem"
        style={{ marginTop: '0.5rem' }}
      />
      <IconContainer>
        <IconWrapper
          $size={3.5}
          $isBackground={true}
          onClick={handleEditQuestion}
        >
          <FiEdit3 />
        </IconWrapper>
        <IconWrapper
          $size={3.5}
          $isBackground={true}
          onClick={handleDeleteQuestion}
        >
          <FiTrash2 />
        </IconWrapper>
      </IconContainer>
    </Container>
  );
};
export default PcRightItem;
