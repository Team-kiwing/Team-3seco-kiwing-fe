import styled from 'styled-components';

import { FONT_MEDIUM, MOBILE, NAVIGATER } from '@/constants';
import { Row } from '@/styles/globalStyles';

import { WebNavBarItemProps } from './WebNavBar.type';

export const WebNavBarBackground = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  margin: 0 auto;
  z-index: ${NAVIGATER};

  max-width: 98%;
  background-color: ${({ theme }) => theme.background_color}90;
  backdrop-filter: blur(20px);

  @media screen and (max-width: ${MOBILE}px) {
    display: none;
  }
`;

export const WebNavBarWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 2rem 0.5rem 2rem;

  max-width: 1140px;
  font-size: 2rem;
  font-weight: ${FONT_MEDIUM};
  color: ${(props) => props.theme.primary_color};
  user-select: none;
`;

export const WebNavBarRouter = styled(Row)`
  align-items: center;
  gap: 3rem;
`;

export const WebNavBarMyPage = styled(Row)`
  gap: 2rem;
  align-items: center;
`;

export const WebNavBarLogo = styled(Row)`
  cursor: pointer;
  font-size: 3.5rem;
  font-weight: bold;
  white-space: nowrap;
  color: ${(props) => props.theme.symbol_color};
`;

export const WebNavBarLogoImage = styled.div`
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  background-image: url('/kiwing_logos_transparent_fit_square.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const WebNavItem = styled.div<WebNavBarItemProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  color: ${(props) =>
    props.$isLocated ? props.theme.symbol_color : 'inherit'};
  gap: 1rem;

  & > div {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const WebNavBarDivideLine = styled.div`
  margin: 0 3rem;
  white-space: nowrap;
  flex-grow: 1;
  height: 0.2rem;
  background-color: ${(props) => props.theme.border_color};
`;
