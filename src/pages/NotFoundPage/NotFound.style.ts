import styled, { keyframes } from 'styled-components';

import { FONT_MEDIUM, MOBILE, MOBILE_FONT_SIZE } from '@/constants';
import { Col, Row } from '@/styles/globalStyles';

const slideIn = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  to {
    transform: translateY(100%);
  }
`;

export const NotFoundLayout = styled(Col)`
  margin: 0 auto;
  width: 80%;
  max-width: 1200px;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const NotFoundLogoImage = styled.img`
  width: 20rem;
`;

export const NotFoundButtonWrap = styled(Row)`
  z-index: 8;
  gap: 2rem;
`;

export const NotFoundText = styled.span`
  font-size: 2rem;
  font-weight: ${FONT_MEDIUM};
  color: ${(props) => props.theme.primary_color};

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.8rem;
  }
`;

export const EasterEggText = styled.span<{ $isShow: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.5rem;

  position: absolute;
  top: 10%;

  visibility: ${({ $isShow }) => ($isShow ? 'visible' : 'hidden')};
  transform: translateY(100%);
  animation: ${({ $isShow }) => ($isShow ? slideIn : slideOut)} 0.5s ease
    forwards;

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.8rem;
  }
`;

export const PTagText = styled.p`
  display: flex;
  justify-content: center;

  font-size: 2rem;
  white-space: pre-wrap;
  font-weight: ${FONT_MEDIUM};

  @media screen and (max-width: ${MOBILE}px) {
    font-size: ${MOBILE_FONT_SIZE}rem;
  }
`;
