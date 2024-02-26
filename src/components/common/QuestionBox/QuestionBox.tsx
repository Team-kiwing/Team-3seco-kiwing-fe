import { ReactNode, useRef } from 'react';
import React from 'react';

import {
  Body,
  BodyWrapper,
  Container,
  Header,
  RightItem,
  TitleWrapper,
} from './QuestionBox.style';

interface QuestionBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  rightItem: ReactNode;
  body?: string;
}

const QuestionBox = ({
  title,
  rightItem,
  body = '',
  //   ...props
}: QuestionBoxProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = React.useState(false);

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
      <Container $isActive={isActive}>
        <TitleWrapper $isActive={isActive}>
          <Header onClick={(e) => handleButtonClick(e)}>{title}</Header>
          <RightItem>{rightItem}</RightItem>
        </TitleWrapper>

        <BodyWrapper
          $isActive={isActive}
          ref={parentRef}
        >
          <Body
            $isActive={isActive}
            ref={childRef}
          >
            {body}
          </Body>
        </BodyWrapper>
      </Container>
    </>
  );
};

export default QuestionBox;
