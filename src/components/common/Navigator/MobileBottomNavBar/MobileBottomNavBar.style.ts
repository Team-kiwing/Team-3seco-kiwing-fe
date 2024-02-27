import { styled } from 'styled-components';

import { FONT_MEDIUM, MOBILE, MOBILE_MIN, NAVIGATER } from '@/constants';
import { Col } from '@/styles/globalStyles';

import { BottomNavBarItemProps } from './MobileBottomNavBar.type';

export const BottomNavBarWrapper = styled.nav`
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  max-width: ${MOBILE}px;
  min-width: ${MOBILE_MIN - 10}px;
  height: 6rem;
  width: 100%;
  white-space: nowrap;
  user-select: none;

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border: 0.15rem solid ${(props) => props.theme.border_color};
  background-color: ${(props) => props.theme.background_color};
  border-bottom: none;

  z-index: ${NAVIGATER};

  @media screen and (max-width: ${MOBILE}px) {
    display: flex;
  }
`;

export const BottomNavBarItem = styled(Col)<BottomNavBarItemProps>`
  width: 25%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;

  cursor: pointer;
  white-space: nowrap;
  color: ${(props) =>
    props.$color ? props.theme.symbol_color : props.theme.primary_color};

  span {
    font-size: 1rem;
    font-weight: ${FONT_MEDIUM};
  }
`;
