import styled from 'styled-components';

import { Col } from '@/styles/globalStyles';

import { InputStyledProps } from './Input.type';

export const InputWrapper = styled(Col)<InputStyledProps>`
  width: ${(props) => props.$width};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : 2)}rem;
`;

export const Label = styled.label<InputStyledProps>`
  color: ${({ theme }) => theme.primary_color};
  margin-bottom: ${(props) => (props.$margin ? props.$margin : 1.5)}rem;
`;

export const StyledInput = styled.input`
  color: ${({ theme }) => theme.primary_color};
  background-color: transparent;
  padding: 0 0.4rem 0.2rem 0.4rem;
  box-sizing: border-box;
  border: none;
  border-bottom: 0.15rem solid ${({ theme }) => theme.primary_color};
  outline: none;
  transition: border 0.2s;

  &:focus {
    border-bottom: 0.15rem solid ${({ theme }) => theme.symbol_secondary_color};
  }

  &::placeholder {
    color: ${({ theme }) => theme.gray_300};
  }
`;

export const ErrorMessage = styled.div<InputStyledProps>`
  color: ${({ theme }) => theme.error_red};
  margin-top: ${(props) => (props.$margin ? props.$margin + 0.15 : 1.65)}rem;
`;
