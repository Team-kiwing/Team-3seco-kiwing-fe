import { useRef, useState } from 'react';
import React from 'react';

import {
  Body,
  BodyWrapper,
  Container,
  Header,
  RightItem,
  TitleWrapper,
} from './QuestionBox.style';
import { QuestionBoxProps } from './QuestionBox.type';

const QuestionBox = ({ title, rightItem, body = '' }: QuestionBoxProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = React.useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0 && isActive) {
        parentRef.current.style.height = '0';
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
      }
      setIsActive(!isActive);
    },
    [isActive]
  );

  return (
    <>
      <Container>
        <TitleWrapper $isActive={isActive}>
          <Header onClick={(e) => handleButtonClick(e)}>{title}</Header>
          <RightItem>{rightItem}</RightItem>
        </TitleWrapper>

        <BodyWrapper ref={parentRef}>
          <Body
            $isEmpty={body.length === 0}
            ref={childRef}
          >
            {body.length === 0 ? '작성된 답변이 없습니다.' : body}
          </Body>
        </BodyWrapper>
      </Container>
    </>
  );
};

export default QuestionBox;
