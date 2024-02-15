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
  border-radius: 0.6rem;
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
    background-color: ${(props) => props.$textColor};
    border: 1px solid ${(props) => props.$backgroundColor};
    color: ${(props) => props.$backgroundColor};
  }

  @media screen and (max-width: ${MOBILE}px) {
    font-size: calc(${(props) => props.$textSize} - 0.3rem);
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
