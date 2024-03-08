import { styled } from 'styled-components';
import { css } from 'styled-components';

import type { StyledCircleButtonProps } from './CircleButton.type';

const buttonStyles = css<StyledCircleButtonProps>`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    !props.$isBackgroundWhite
      ? `${props.theme.symbol_color}40`
      : `${props.theme.symbol_secondary_color}60`};

  color: ${({ theme }) => theme.primary_white_text_color};
  font-size: calc(${(props) => props.$size} / 2);

  width: ${(props) => props.$size};
  height: ${(props) => props.$size};
  border-radius: 50%;

  transition: all 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(props) =>
        !props.$isBackgroundWhite
          ? `${props.theme.symbol_secondary_color}40`
          : `${props.theme.symbol_secondary_color}80`};
    }
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:active {
    background-color: ${(props) =>
      !props.$isBackgroundWhite
        ? `${props.theme.symbol_secondary_color}40`
        : `${props.theme.symbol_secondary_color}80`};
  }
`;

export const Circle = styled.div<StyledCircleButtonProps>`
  ${buttonStyles}

  background-color: ${(props) =>
    !props.$isBackgroundWhite ? props.theme.symbol_color : `#008c4580`};

  width: calc(${(props) => props.$size} * 0.85);
  height: calc(${(props) => props.$size} * 0.85);

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(props) =>
        !props.$isBackgroundWhite
          ? props.theme.symbol_secondary_color
          : `#03471a`};
    }
  }

  &:active {
    background-color: ${(props) =>
      !props.$isBackgroundWhite
        ? props.theme.symbol_secondary_color
        : `#03471a`};
  }
`;

export const TransparentCircle = styled.button<StyledCircleButtonProps>`
  ${buttonStyles}
`;
