import { styled } from 'styled-components';

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

  &:hover {
    background-color: ${(props) => props.$hoverBackgroundColor};
    color: ${(props) => props.$hoverTextColor};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.$textColor};
    border: 1px solid ${(props) => props.$backgroundColor};
    color: ${(props) => props.$backgroundColor};
  }
`;

export default StyledButton;
