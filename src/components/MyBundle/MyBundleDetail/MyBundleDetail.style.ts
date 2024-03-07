import styled from 'styled-components';

import { Col } from '@/styles/globalStyles';

export const Container = styled(Col)`
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
`;
export const Header = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: flex-end;
`;
export const Body = styled(Col)`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  box-sizing: border-box;
`;

export const BodyInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuestionWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const Footer = styled(Col)`
  width: 100%;
  height: 10rem;
  align-items: flex-end;
  gap: 2rem;
`;
export const CountText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.border_color};
`;
