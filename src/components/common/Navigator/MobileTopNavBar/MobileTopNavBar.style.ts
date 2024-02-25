import { styled } from 'styled-components';

import { FONT_SEMI_BOLD, MOBILE, MOBILE_MIN, NAVIGATER } from '@/constants';

export const TopNavBarWrapper = styled.nav<{ $isDark: boolean }>`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  max-width: ${MOBILE}px;
  min-width: ${MOBILE_MIN - 10}px;
  height: 5rem;
  width: 100%;
  white-space: nowrap;

  background-color: ${(props) => props.theme.background_color};

  border-bottom: 0.15rem solid ${(props) => props.theme.border_color};

  z-index: ${NAVIGATER};
`;

export const TopBarItem = styled.div<{ $color?: boolean }>`
  display: flex;
  margin: 0 1rem;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;
  gap: 1rem;

  white-space: nowrap;
  color: ${(props) =>
    props.$color ? props.theme.symbol_color : props.theme.primary_color};

  span {
    font-size: 1rem;
    font-weight: ${FONT_SEMI_BOLD - 50};
  }
`;
