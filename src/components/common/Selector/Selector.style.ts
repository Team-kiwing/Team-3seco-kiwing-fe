import styled from 'styled-components';

import { FONT_REGULAR } from '@/constants';

import { SelectorStickProps, SelectorStyleProps } from './Selector.type';

export const SelectWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const SelectStick = styled.div<SelectorStickProps>`
  width: 0.1rem;
  height: ${({ $size }) => `${$size - 0.2}rem`};
  background-color: ${({ theme }) => theme.gray_200};
  white-space: nowrap;
`;

const Content = styled.div<SelectorStyleProps>`
  font-size: ${({ $size }) => `${$size}rem`};
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    font-size: ${({ $size }) => `${$size - 0.1}rem`};
  }
`;

export const FirstContent = styled(Content)`
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.primary_color : theme.gray_400};
  font-weight: ${({ $isSelected }) =>
    $isSelected ? FONT_REGULAR + 50 : FONT_REGULAR};
`;

export const SecondContent = styled(Content)`
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.gray_400 : theme.primary_color};
  font-weight: ${({ $isSelected }) =>
    $isSelected ? FONT_REGULAR : FONT_REGULAR + 50};
`;
