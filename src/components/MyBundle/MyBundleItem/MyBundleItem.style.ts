import styled from 'styled-components';

import {
  FONT_MEDIUM,
  MOBILE,
  MOBILE_FONT_SIZE,
  WEB_FONT_SIZE,
} from '@/constants';

export const Title = styled.span`
  width: 100%;
  font-size: ${WEB_FONT_SIZE}rem;
  font-weight: ${FONT_MEDIUM};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;

  @media screen and (max-width: ${MOBILE}px) {
    width: 90%;
    font-size: ${MOBILE_FONT_SIZE}rem;
  }
`;

export const RightItem = styled.div`
  margin-right: 1rem;
`;

export const BodyWrapper = styled.div<{
  $isDarkMode: boolean;
}>`
  width: 100%;
  height: 0;
  background-color: transparent;
  overflow: hidden;
  transition:
    height 0.5s ease,
    opacity 0.5s ease;

  box-sizing: border-box;

  font-size: calc(${WEB_FONT_SIZE}rem - 0.2rem);
  @media screen and (max-width: ${MOBILE}px) {
    font-size: calc(${MOBILE_FONT_SIZE}rem - 0.2rem);
  }
`;
