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
    padding-top: 2.5rem;
    padding-bottom: 1.5rem;
  }
`;

export const InnerContainer = styled(Col)`
  width: 100%;
  height: 100%;
  padding: 2rem;
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

export const EmptyBody = styled(Col)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
`;

export const TextContainer = styled(Col)`
  justify-content: center;
  align-items: center;
`;

export const SmallText = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.border_color};
  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1rem;
  }
`;

export const HubText = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.symbol_color};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${({ theme }) => theme.symbol_secondary_color};
      cursor: pointer;
    }
  }

  &:active {
    color: ${({ theme }) => theme.symbol_secondary_color};
    cursor: pointer;
  }

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1rem;
  }

  transition: all 0.2s ease;
`;

export const IconAnimation = styled.div`
  animation:
    skeleton--zoom-in 0.5s ease-out,
    skeleton--loading 2s infinite linear,
    skeleton--wave 2s infinite;

  @keyframes skeleton--zoom-in {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes skeleton--loading {
    0% {
      background-position-x: 100%;
    }
    50% {
      background-position-x: -100%;
    }
    100% {
      background-position-x: -100%;
    }
  }

  @keyframes skeleton--wave {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
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
