import styled from 'styled-components';

import { FONT_MEDIUM, MOBILE, WEB_FONT_SIZE } from '@/constants';

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
  }
`;

export const RightItem = styled.div`
  margin-right: 1rem;
`;

export const BodyWrapper = styled.div<{
  $isDarkMode: boolean;
  $isActive: boolean;
}>`
  width: 100%;
  height: 0;
  background-color: transparent;
  overflow: hidden;
  transition:
    height 0.5s ease,
    opacity 0.5s ease;
  box-shadow: 0.2rem 0.2rem 2rem 0.5rem
    ${(props) =>
      props.$isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};

  @media screen and (max-width: ${MOBILE}px) {
    margin-bottom: ${(props) => (props.$isActive ? '1.5rem' : '0')};
  }
`;
