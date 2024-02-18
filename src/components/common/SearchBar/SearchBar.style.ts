import styled from 'styled-components';

import { MOBILE } from '@/constants';

export const SearchBarWrapper = styled.div`
  @media screen and (max-width: ${MOBILE}px) {
    margin: 0 auto;
  }

  position: relative;
  width: 80%;
  max-width: 432px;
  min-width: 224px;

  & > :nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
