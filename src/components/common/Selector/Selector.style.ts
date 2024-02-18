import styled from 'styled-components';

import { FONT_REGULAR, MOBILE } from '@/constants';

export const SelectWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
`;

export const SelectStick = styled.div<{ $size: number }>`
  width: 0.1rem;
  height: ${({ $size }) => `${$size - 0.2}rem`};
  background-color: ${({ theme }) => theme.gray_200};
  white-space: nowrap;
`;

const Content = styled.div<{ isSelected: boolean; $size: number }>`
  white-space: nowrap;
  transition: font-size 0.3s ease;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
`;

export const FirstContent = styled(Content)`
  font-size: ${({ isSelected, $size }) =>
    isSelected ? `${$size + 0.1}rem` : `${$size}rem`};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.primary_color : theme.gray_400};
  font-weight: ${({ isSelected }) =>
    isSelected ? FONT_REGULAR + 50 : FONT_REGULAR};

  @media screen and (max-width: 768px) {
    font-size: ${({ isSelected, $size }) =>
      isSelected ? `${$size}rem` : `${$size - 0.1}rem`};
  }
`;

export const SecondContent = styled(Content)`
  font-size: ${({ isSelected, $size }) =>
    isSelected ? `${$size}rem` : `${$size + 0.1}rem`};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.gray_400 : theme.primary_color};
  font-weight: ${({ isSelected }) =>
    isSelected ? FONT_REGULAR : FONT_REGULAR + 50};

  @media screen and (max-width: ${MOBILE}px) {
    font-size: ${({ isSelected, $size }) =>
      isSelected ? `${$size - 0.1}rem` : `${$size}rem`};
  }
`;
