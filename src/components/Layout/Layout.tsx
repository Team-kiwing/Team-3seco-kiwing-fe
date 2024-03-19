import { styled } from 'styled-components';

import { MOBILE } from '@/constants';

const Layout = styled.main`
  width: 100%;
  height: 100%;
  padding-top: 6.525rem;
  box-sizing: border-box;
  overflow-y: scroll;

  @media screen and (max-width: ${MOBILE}px) {
    width: 100%;
    height: 100%;
    padding-top: 5rem;
    padding-bottom: calc(6rem + env(safe-area-inset-bottom));
  }
`;

export default Layout;
