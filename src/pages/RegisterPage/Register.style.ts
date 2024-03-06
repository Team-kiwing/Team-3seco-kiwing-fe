import styled from 'styled-components';

import { FONT_BOLD, MOBILE } from '@/constants';
import { Col, Row } from '@/styles/globalStyles';

export const RegisterPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 6rem auto 0 auto;
  align-items: center;

  @media screen and (max-width: ${MOBILE}px) {
    flex-direction: column;
    font-size: 2.8rem;
  }
`;

export const RegisterIntro = styled(Col)`
  width: 40%;
  align-items: center;
  & > img {
    width: 100%;
    max-width: 20rem;
  }

  @media screen and (max-width: ${MOBILE}px) {
    width: 100%;
    align-items: flex-start;
  }
`;

export const RegisterHeader = styled.div`
  font-size: 5rem;
  font-weight: ${FONT_BOLD};
  margin-bottom: 3rem;
  word-break: break-all;
  color: ${({ theme }) => theme.primary_color};

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 2.8rem;
  }
`;

export const RegisterFormWrapper = styled(Col)`
  width: 60%;
  padding: 0 5rem;
  margin-bottom: 3rem;

  @media screen and (max-width: ${MOBILE}px) {
    width: 100%;
    padding: 0;
  }
`;

export const RegisterLabel = styled.label`
  display: inline-block;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary_color};

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.6rem;
  }
`;

export const RegisterItemWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const RegisterCheckboxWrapper = styled(Row)`
  align-items: center;
  margin-bottom: 3rem;

  & > div {
    color: ${({ theme }) => theme.primary_color};
    font-size: 1.8rem;

    @media screen and (max-width: ${MOBILE}px) {
      font-size: 1.6rem;
    }

    & > a {
      color: ${({ theme }) => theme.symbol_secondary_color};
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

export const RegisterSubmitButton = styled.button`
  width: 10rem;
  padding: 1.4rem;
  border-radius: 10rem;
  font-size: 1.7rem;
  color: ${({ theme }) => theme.primary_white_text_color};
  background-color: ${({ theme }) => theme.symbol_color};

  @media screen and (max-width: ${MOBILE}px) {
    padding: 1.2rem;
    font-size: 1.5rem;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) => theme.symbol_secondary_color};
    }
  }
`;
