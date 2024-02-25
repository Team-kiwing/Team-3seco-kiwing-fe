import styled from 'styled-components';

import { Row } from '@/styles/globalStyles';

import { WebNavItemProps } from './WebNavBar.type';

export const WebNavBarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0.5rem 3rem;

  max-width: 1140px;
  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => props.theme.primary_color};
  user-select: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const WebNavBarRouter = styled(Row)`
  align-items: center;
  gap: 3rem;
`;

export const WebNavBarMyPage = styled(Row)`
  gap: 2rem;
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

export const WebNavItem = styled.div<WebNavItemProps>`
  cursor: pointer;
  white-space: nowrap;
  color: ${(props) =>
    props.$isLocated ? props.theme.symbol_color : 'inherit'};
`;

export const WebNavBarDivideLine = styled.div`
  margin: 0 3rem;
  white-space: nowrap;
  flex-grow: 1;
  height: 0.2rem;
  background-color: ${(props) => props.theme.border_color};
`;
