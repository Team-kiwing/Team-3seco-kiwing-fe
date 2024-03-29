import { styled } from 'styled-components';

import { MOBILE, WEB_FONT_SIZE } from '@/constants';
import { Col } from '@/styles/globalStyles';

export const Container = styled.section`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 80%;
  height: 100%;
  padding-top: 1.5rem;

  box-sizing: border-box;

  transition: all 1s ease;

  @media screen and (max-width: ${MOBILE}px) {
    width: 100%;
    height: calc(100vh - 11rem);
    padding-top: 2.5rem;
    padding-bottom: 1.5rem;
  }
`;

export const TextContainer = styled(Col)`
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
`;

export const Text = styled.span`
  font-size: ${WEB_FONT_SIZE}rem;
  color: ${({ theme }) => theme.primary_color};
`;

export const SmallText = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.gray_300};
  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1rem;
  }
`;

export const SharedText = styled.span`
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
