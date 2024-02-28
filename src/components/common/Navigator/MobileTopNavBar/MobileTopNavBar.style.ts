import { styled } from 'styled-components';

import { FONT_MEDIUM, MOBILE, MOBILE_MIN, NAVIGATER } from '@/constants';

import {
  TopNavBarItemProps,
  TopNavBarWrapperProps,
} from './MobileTopNavBar.type';

export const TopNavBarWrapper = styled.nav<TopNavBarWrapperProps>`
  display: none;
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
  user-select: none;

  background-color: ${(props) => props.theme.background_color};

  border-bottom: 0.15rem solid ${(props) => props.theme.border_color};

  z-index: ${NAVIGATER};

  @media screen and (max-width: ${MOBILE}px) {
    display: flex;
  }
`;

export const TopBarItem = styled.div<TopNavBarItemProps>`
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
    font-weight: ${FONT_MEDIUM};
  }
`;
