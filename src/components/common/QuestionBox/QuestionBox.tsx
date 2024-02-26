import { ReactNode } from 'react';

import { Body, Container, RightItem, Title } from './QuestionBox.style';

interface QuestionBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive: boolean;
  title: string;
  rightItem: ReactNode;
  body?: string;
}

const QuestionBox = ({
  isActive,
  title,
  rightItem,
  body = '',
  ...props
}: QuestionBoxProps) => {
  return (
    <>
      <Container
        {...props}
        $isActive={isActive}
      >
        <Title>{title}</Title>
        <RightItem>{rightItem}</RightItem>
      </Container>
      <Body $isActive={isActive}>{body}</Body>
    </>
  );
};

export default QuestionBox;
