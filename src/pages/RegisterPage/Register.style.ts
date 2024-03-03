import styled from 'styled-components';

import { FONT_BOLD } from '@/constants';
import { Col, Row } from '@/styles/globalStyles';

import { RegisterPageStyleProps } from './Register.type';

export const RegisterPageWrapper = styled(Row)`
  width: 80%;
  margin: 6rem auto 0 auto;
  align-items: center;
`;

export const RegisterLogo = styled.div`
  width: 40%;

  & > img {
    width: 100%;
  }
`;

export const RegisterHeader = styled.div<RegisterPageStyleProps>`
  font-size: ${(props) => (props.$isMobile ? '3rem' : '5rem')};
  font-weight: ${FONT_BOLD};
  margin-bottom: 5rem;
  word-break: keep-all;
  color: ${({ theme }) => theme.primary_color};
`;

export const RegisterFormWrapper = styled(Col)<RegisterPageStyleProps>`
  width: ${(props) => (props.$isMobile ? '100%' : '60%')};
  padding: ${(props) => (props.$isMobile ? '' : '0 5rem')};
  margin-bottom: 3rem;
`;

export const RegisterLabel = styled.label<RegisterPageStyleProps>`
  display: inline-block;
  font-size: ${(props) => (props.$isMobile ? '1.6rem' : '1.8rem')};
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary_color};
`;

export const RegisterItemWrapper = styled.div`
  margin-bottom: 3rem;
`;

export const RegisterCheckboxWrapper = styled(Row)<RegisterPageStyleProps>`
  align-items: center;
  margin-bottom: 3rem;

  & > div {
    color: ${({ theme }) => theme.primary_color};
    font-size: ${(props) => (props.$isMobile ? '1.6rem' : '1.8rem')};

    & > a {
      color: ${({ theme }) => theme.symbol_secondary_color};
      /* text-decoration: none; */
    }
  }

  & > input {
    margin-right: 1.2rem;
  }
`;

export const RegisterCheckbox = styled.input`
  width: 2.5rem;
  height: 2.5rem;
  color: ${({ theme }) => theme.symbol_secondary_color};
  vertical-align: middle;
  -webkit-appearance: none;
  background: none;
  outline: 0;
  flex-grow: 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary_white_text_color};
  transition: all 0.2s ease;
  cursor: pointer;

  /* Pseudo element for check styling */

  &::before {
    content: '';
    color: transparent;
    display: block;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    border: 0;
    background-color: transparent;
    background-size: contain;
    box-shadow: inset 0 0 0 0.1rem ${({ theme }) => theme.border_color};
  }

  /* Checked */

  &:checked {
    background-color: currentcolor;
    border-radius: 50%;
  }

  &:checked::before {
    box-shadow: none;
    border-radius: 50%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath d='M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z' fill='%23fff'/%3E %3C/svg%3E");
  }

  /* Disabled */

  &:disabled {
    background-color: ${({ theme }) => theme.border_color};
    opacity: 0.84;
    cursor: not-allowed;
  }
`;

export const RegisterSubmitButton = styled.button<RegisterPageStyleProps>`
  width: 10rem;
  padding: ${(props) => (props.$isMobile ? '1.2rem' : '1.4rem')};
  border-radius: 10rem;
  font-size: ${(props) => (props.$isMobile ? '1.5rem' : '1.7rem')};
  color: ${({ theme }) => theme.primary_white_text_color};
  background-color: ${({ theme }) => theme.symbol_color};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) => theme.symbol_secondary_color};
    }
  }
`;
