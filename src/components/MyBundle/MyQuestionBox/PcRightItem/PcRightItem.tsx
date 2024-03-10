import { FiEdit3, FiTrash2 } from 'react-icons/fi';

import IconWrapper from '@/components/common/IconWrapper';
import Toggle from '@/components/common/Toggle';

import { useMyQuestionModal } from '../../MyQuestionModal/MyQuestionModal.hook';
import { Container, IconContainer } from './PcRightItem.style';
import { RightItemProps } from './PcRightItem.type';

const PcRightItem = ({
  question,
  bundleId,
  isShared,
  setIsShared,
}: RightItemProps) => {
  const { handleEditQuestionClick } = useMyQuestionModal(bundleId);

  const handleEditQuestion = () => {
    handleEditQuestionClick({
      bundleId: bundleId,
      questionId: question.id,
      questionNameField: question.content,
      questionAnswerField: question.answer,
      isSharedField: question.answerShareType === 'PUBLIC',
      selectedTagsField: question.tags,
    });
  };

  return (
    <Container>
      <Toggle
        on={isShared}
        onChange={() => setIsShared(!isShared)}
        isBorderShow={true}
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
        >
          <FiTrash2 />
        </IconWrapper>
      </IconContainer>
    </Container>
  );
};
export default PcRightItem;
