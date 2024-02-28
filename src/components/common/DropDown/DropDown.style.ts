import styled, { css } from 'styled-components';

import { MOBILE } from '@/constants';
import { Direction } from '@/types/dropdown';

const positionByDirection = (position: Direction) => {
  switch (position) {
    case 'left-top':
      return css`
        right: 100%;
        bottom: 0;
        margin-right: 0.5rem;
      `;
    case 'left':
      return css`
        right: 100%;
        margin-right: 0.5rem;
      `;
    case 'left-bottom':
      return css`
        right: 100%;
        top: 0;
        margin-right: 0.5rem;
      `;
    case 'right-top':
      return css`
        left: 100%;
        bottom: 0;
        margin-left: 0.5rem;
      `;
    case 'right':
      return css`
        left: 100%;
        margin-left: 0.5rem;
      `;
    case 'right-bottom':
      return css`
        left: 100%;
        top: 0;
        margin-left: 0.5rem;
      `;
    case 'top-left':
      return css`
        bottom: 100%;
        right: 0;
        margin-bottom: 0.5rem;
      `;
    case 'top':
      return css`
        bottom: 100%;
        margin-bottom: 0.5rem;
      `;
    case 'top-right':
      return css`
        bottom: 100%;
        left: 0;
        margin-bottom: 0.5rem;
      `;
    case 'bottom-left':
      return css`
        top: 100%;
        right: 0;
        margin-top: 0.5rem;
      `;
    case 'bottom':
      return css`
        top: 100%;
        margin-top: 0.5rem;
      `;
    case 'bottom-right':
      return css`
        top: 100%;
        left: 0;
        margin-top: 0.5rem;
      `;
    default:
      return css``;
  }
};

export const Wrapper = styled.div<{ $isShow: boolean; $direction: Direction }>`
  display: ${({ $isShow }) => ($isShow ? 'flex' : 'none')};
  position: absolute;

  ${({ $direction }) => positionByDirection($direction)}
`;

export const Options = styled.div`
  width: 100%;
  height: 80%;
  overflow: auto;
`;

export const Item = styled.div<{ $mode: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  cursor: pointer;

  ${(props) => {
    if (props.$mode === 'checkbox') {
      return css`
        min-height: 5rem;
        border-bottom: 0.1rem solid ${({ theme }) => theme.border_color};

        &:last-child {
          border-bottom: none;
        }
      `;
    }
  }}

  transition: all 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) => theme.border_color};
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.border_color};
  }

  &:last-child {
    border-radius: 0 0 1rem 1rem;
  }
  &:first-child {
    border-radius: 1rem 1rem 0 0;
  }

  @media screen and (max-width: ${MOBILE}px) {
    &:last-child {
      border-radius: 0 0 0.6rem 0.6rem;
    }
    &:first-child {
      border-radius: 0.6rem 0.6rem 0 0;
    }
  }
`;

export const Title = styled.span`
  font-size: 1.4rem;

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.2rem;
  }
`;

export const Body = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.gray_300};
`;

export const Footer = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const checkboxStyles = css`
  /* Basic styling */

  width: 1.5rem;
  height: 1.5rem;
  color: ${({ theme }) => theme.symbol_secondary_color};
  vertical-align: middle;
  -webkit-appearance: none;
  background: none;
  outline: 0;
  flex-grow: 0;
  border-radius: 50%;
  background-color: transparent;
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
    background-color: #ccd3d8;
    opacity: 0.84;
    cursor: not-allowed;
  }
`;

export const CheckBoxInput = styled.input`
  ${checkboxStyles}
`;
