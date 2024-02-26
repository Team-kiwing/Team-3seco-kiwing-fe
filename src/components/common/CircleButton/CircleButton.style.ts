import { styled } from 'styled-components';
import { css } from 'styled-components';

import type { StyledCircleButtonProps } from './CircleButton.type';

const buttonStyles = css<StyledCircleButtonProps>`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    if (!props.$isBackgroundWhite) {
      return css`
        background-color: ${({ theme }) => theme.symbol_color}40;
      `;
    } else {
      return css`
        background-color: rgba(255, 255, 255, 0.4);
      `;
    }
  }};
  color: ${({ theme }) => theme.background_color};
  font-size: calc(${(props) => props.$size} / 2);

  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  border-radius: 50%;

  transition: all 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) => theme.symbol_secondary_color}40;
      color: ${({ theme }) => theme.secondary_color};
    }
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:active {
    background-color: ${({ theme }) => theme.symbol_secondary_color}40;
    color: ${({ theme }) => theme.secondary_color};
  }

  -webkit-tap-highlight-color: transparent;
`;

export const ContainerCircle = styled.button`
  ${buttonStyles}
`;

export const Circle = styled.div<StyledCircleButtonProps>`
  ${buttonStyles}

  background-color: ${({ theme }) => theme.symbol_color};
  width: calc(${(props) => props.$size} * 0.85);
  height: calc(${(props) => props.$size} * 0.85);

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) => theme.symbol_secondary_color};
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.symbol_secondary_color};
  }
`;
