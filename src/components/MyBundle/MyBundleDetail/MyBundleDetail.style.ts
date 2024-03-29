import styled from 'styled-components';

import { MOBILE } from '@/constants';
import { Col } from '@/styles/globalStyles';

export const Container = styled.section<{ $isBundleSelected: boolean }>`
  width: ${({ $isBundleSelected }) => ($isBundleSelected ? '60%' : '80%')};
  height: 100%;
  padding-top: 1.5rem;

  box-sizing: border-box;

  transition: all 1s ease;

  @media screen and (max-width: ${MOBILE}px) {
    width: 100%;
    padding-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const InnerContainer = styled(Col)`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem 1.5rem 1rem;
  box-sizing: border-box;
  transition: width 0.2s ease;

  @media screen and (max-width: ${MOBILE}px) {
    padding: 1rem;
  }
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
  scroll-behavior: smooth;
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
  height: 7rem;
  align-items: flex-end;
  gap: 1rem;
`;
export const CountText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.border_color};
`;
