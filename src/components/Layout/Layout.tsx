import { styled } from 'styled-components';

import { MOBILE } from '@/constants';

const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 1rem;

  @media screen and (max-width: ${MOBILE}px) {
    padding-top: 5rem;
    padding-bottom: 6rem;
  }
`;

export default Layout;
