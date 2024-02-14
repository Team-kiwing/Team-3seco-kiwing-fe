import { styled } from 'styled-components';

import { MOBILE, NAVIGATER } from '@/constants';
import { Col } from '@/styles/globalStyles';

export const BottomNavBarWrapper = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  max-width: ${MOBILE}px;
  min-width: 260px;
  height: 6rem;
  width: 100%;
  white-space: nowrap;

  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border: 0.2rem solid ${(props) => props.theme.gray_100};
  border-bottom: none;

  z-index: ${NAVIGATER};
`;

export const BottomNavBarItem = styled(Col)<{ $color?: boolean }>`
  display: flex;
  width: 25%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-shrink: 1;

  cursor: pointer;
  white-space: nowrap;
  color: ${(props) => (props.$color ? '#48da79' : undefined)};
  -webkit-tap-highlight-color: transparent;

  span {
    font-weight: 500;
  }
`;
