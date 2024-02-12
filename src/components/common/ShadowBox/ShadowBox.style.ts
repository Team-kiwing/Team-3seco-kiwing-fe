import styled from 'styled-components';

import { ContainerProps } from './ShadowBox.type';

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: ${(props) => props.$width}px;
  height: ${(props) => props.$height}px;
  background-color: ${(props) => props.$color};
  box-shadow: 0.2rem 0.2rem 2rem 0.5rem rgba(0, 0, 0, 0.05);
  border-radius: 1rem;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      scale: ${(props) => props.$scale};
    }
  }

  @media screen and (max-width: 768px) {
    border-radius: 0.6rem;
  }
`;
