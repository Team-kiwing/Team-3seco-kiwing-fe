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
      props.$isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
  border-radius: 1rem;
  transition: all 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      scale: ${(props) => (props.$isHoverActive ? 1.05 : undefined)};
    }
  }

  @media screen and (max-width: ${MOBILE}px) {
    border-radius: 0.6rem;
  }
`;
