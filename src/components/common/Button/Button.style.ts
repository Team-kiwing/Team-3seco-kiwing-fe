import { css, styled } from 'styled-components';

import { MOBILE } from '@/constants';

import type { StyledButtonProps } from './Button.type';

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$textColor};
  font-size: ${(props) => props.$textSize};

  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  border-radius: ${(props) => props.$borderRadius};
  border: 1px solid ${(props) => props.$borderColor};

  transition: all 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(props) => props.$hoverBackgroundColor};
      color: ${(props) => props.$hoverTextColor};
    }
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.gray_300};
    border: none;
    color: white;
  }

  @media screen and (max-width: ${MOBILE}px) {
    font-size: calc(${(props) => props.$textSize} - 0.2rem);
    border-radius: max(
      calc(${(props) => props.$borderRadius} - 0.4rem),
      0.6rem
    );
  }

  &:active {
    ${(props) => {
      if (props.$isActive) {
        return css`
          background-color: ${props.$hoverBackgroundColor};
          color: ${props.$hoverTextColor};
        `;
      }
    }}
  }

  -webkit-tap-highlight-color: transparent;
`;

export default StyledButton;
