import styled from 'styled-components';

import { Col } from '@/styles/globalStyles';

import { TextareaStyledProps } from './Textarea.type';

export const TextareaWrapper = styled(Col)<TextareaStyledProps>`
  /* TODO: 768 => constans > MOBILE로 수정하기 */
  @media screen and (max-width: 768px) {
    font-size: ${(props) => (props.$fontSize ? props.$fontSize - 0.2 : 1.4)}rem;
  }

  width: ${(props) => props.$width};
  font-size: ${(props) => (props.$fontSize ? props.$fontSize : 1.6)}rem;
`;

export const Label = styled.label<TextareaStyledProps>`
  color: ${({ theme }) => theme.primary_color};
  margin-bottom: ${(props) => (props.$margin ? props.$margin : 1.5)}rem;
`;

export const StyledTextarea = styled.textarea<TextareaStyledProps>`
  height: ${(props) => props.$height};
  color: ${({ theme }) => theme.primary_color};
  background-color: transparent;
  padding: 1rem;
  box-sizing: border-box;
  border: none;
  border: 0.15rem solid ${({ theme }) => theme.gray_100};
  border-radius: 0.5rem;
  outline: none;
  transition: border 0.2s;
  resize: none;

  &:focus {
    border: 0.15rem solid ${({ theme }) => theme.symbol_secondary_color};
  }

  &::placeholder {
    color: ${({ theme }) => theme.gray_300};
  }
`;

export const ErrorMessage = styled.div<TextareaStyledProps>`
  font-size: ${(props) => (props.$fontSize ? props.$fontSize - 0.3 : 1.3)}rem;
  color: ${({ theme }) => theme.error_red};
  margin-top: ${(props) => (props.$margin ? props.$margin + 0.15 : 1.65)}rem;
  visibility: ${({ $isError }) => ($isError ? 'hidden' : undefined)};
  cursor: default;
`;
