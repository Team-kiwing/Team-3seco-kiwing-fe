import styled, { css } from 'styled-components';

import { DROP_DOWN, MOBILE } from '@/constants';
import { Col } from '@/styles/globalStyles';
import { Direction } from '@/types/dropdown';

const positionByDirection = (
  position: Direction,
  width: string,
  height: string
) => {
  switch (position) {
    case 'left-top':
      return css`
        right: 100%;
        bottom: max(100%, ${height});
        transform: translateY(${height});
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
        top: max(100%, ${height});
        transform: translateY(-${height});
        margin-right: 0.5rem;
      `;
    case 'right-top':
      return css`
        left: 100%;
        bottom: max(100%, ${height});
        transform: translateY(${height});
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
        top: max(100%, ${height});
        transform: translateY(-${height});
        margin-left: 0.5rem;
      `;
    case 'top-left':
      return css`
        bottom: 100%;
        right: max(100%, ${width});
        transform: translateX(${width});
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
        left: max(100%, ${width});
        transform: translateX(-${width});
        margin-bottom: 0.5rem;
      `;
    case 'bottom-left':
      return css`
        top: 100%;
        right: max(100%, ${width});
        transform: translateX(${width});
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
        left: max(100%, ${width});
        transform: translateX(-${width});
        margin-top: 0.5rem;
      `;
    default:
      return css``;
  }
};

export const Wrapper = styled.div<{
  $isShow: boolean;
  $direction: Direction;
  $width: string;
  $height: string;
}>`
  display: ${({ $isShow }) => ($isShow ? 'flex' : 'none')};
  position: absolute;
  z-index: ${DROP_DOWN};

  z-index: ${DROP_DOWN};

  ${({ $direction, $width, $height }) =>
    positionByDirection($direction, $width, $height)}
`;

export const Options = styled.div<{
  $mode: 'normal' | 'checkbox';
}>`
  height: ${({ $mode }) => ($mode === 'normal' ? '100%' : '80%')};

  overflow: auto;
  display: flex;
  flex-direction: column;
  cursor: auto;
`;

export const Item = styled.div<{ $mode: string; $height: number }>`
  max-width: 100%;
  min-height: ${({ $height }) => $height}rem;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  box-sizing: border-box;

  ${(props) => {
    if (props.$mode === 'checkbox') {
      return css`
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
    border-radius: ${({ $mode }) => ($mode === 'normal' ? '0 0 1rem 1rem' : 0)};
  }
  &:first-child {
    border-radius: 1rem 1rem 0 0;
  }

  @media screen and (max-width: ${MOBILE}px) {
    &:last-child {
      border-radius: ${({ $mode }) =>
        $mode === 'normal' ? '0 0 0.6rem 0.6rem' : 0};
    }
    &:first-child {
      border-radius: 0.6rem 0.6rem 0 0;
    }
  }
`;

export const Content = styled(Col)`
  text-align: left;
`;

export const Title = styled.span`
  font-size: 1.4rem;
  width: 100%;
  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.2rem;
  }
`;

export const Body = styled.span`
  font-size: 1rem;
  width: 100%;
  color: ${({ theme }) => theme.gray_300};
`;

export const Footer = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: auto;
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

export const CheckBoxInput = styled.input`
  ${checkboxStyles}
`;
