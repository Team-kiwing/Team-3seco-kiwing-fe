import styled from 'styled-components';

import { MOBILE } from '@/constants';

import { ContainerProps } from './ShadowBox.type';

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$color};
  box-shadow: 0.2rem 0.2rem 2rem 0.5rem
    ${(props) =>
      props.$isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: ${(props) => (props.$isCard ? '1.5rem' : '1rem')};
  transition: all 0.2s ease;
  color: ${(props) =>
    props.$isActive
      ? props.theme.primary_white_text_color
      : props.theme.primary_color};
  font-size: 1.6rem;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      scale: ${(props) => (props.$isHoverActive ? 1.05 : undefined)};
    }
  }

  @media screen and (max-width: ${MOBILE}px) {
    border-radius: ${(props) => (props.$isCard ? '1.1rem' : '0.6rem')};
    font-size: 1.4rem;
  }
`;
