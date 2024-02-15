import styled from 'styled-components';

import { Row } from '@/styles/globalStyles';

export const WebNavBarWrapper = styled.nav`
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0.5rem 3rem;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
  font-weight: 500;
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
  color: #48da79; // todo. theme props 형태로 변경
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

export const WebNavItem = styled.div<{ $isLocated: boolean }>`
  cursor: pointer;
  white-space: nowrap;
  color: ${(props) => (props.$isLocated ? '#48da79' : undefined)};
`;

export const WebNavBarDivideLine = styled.div`
  margin: 0 3rem;
  white-space: nowrap;
  flex-grow: 1;
  height: 0.2rem;
  background-color: #d9d9d9;
`;
