import useAccordion from '@/hooks/useAccordion';

import {
  Body,
  BodyWrapper,
  Container,
  Header,
  RightItem,
  TitleWrapper,
} from './QuestionBox.style';
import { QuestionBoxProps } from './QuestionBox.type';

const QuestionBox = ({
  question,
  answer = '',
  rightItem,
}: QuestionBoxProps) => {
  const { parentRef, childRef, isActive, handleClick } = useAccordion();

  return (
    <>
      <Container>
        <TitleWrapper $isActive={isActive}>
          <Header onClick={(e) => handleClick(e)}>{question}</Header>
          <RightItem>{rightItem}</RightItem>
        </TitleWrapper>

        <BodyWrapper ref={parentRef}>
          <Body
            $isEmpty={answer === null || answer.length === 0}
            ref={childRef}
          >
            {answer === null && '비공개 된 답변입니다.'}
            {answer !== null && answer.length === 0
              ? '작성된 답변이 없습니다.'
              : answer}
          </Body>
        </BodyWrapper>
      </Container>
    </>
  );
};

export default QuestionBox;
