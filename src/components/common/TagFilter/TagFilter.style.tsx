import styled from 'styled-components';

import { MOBILE } from '@/constants';

export const Wrapper = styled.div`
  width: 100rem;
  height: 15rem;
  margin: 0 auto;

  @media screen and (max-width: ${MOBILE}) {
    height: 20rem;
    max-width: 40rem;
  }
  @media screen and (max-width: 280px) {
    height: 21rem;
    max-width: 280px;
  }
`;

export const TagFilterWrapper = styled.div`
  display: flex;
  padding-top: 10px;
  width: 95%;
  height: 95%;
  margin: 0 auto;
  @media screen and (max-width: ${MOBILE}) {
    width: 100%;
  }
  @media screen and (max-width: 280px) {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  width: 8%;
  gap: 1px;
  font-size: 2rem;
  padding-top: 5px;
  padding-left: 10px;
  @media screen and (max-width: ${MOBILE}) {
    width: 15%;
  }
`;

export const Label = styled.span`
  font-size: 2.5rem;
  @media screen and (max-width: ${MOBILE}) {
    font-size: 2rem;
  }
  @media screen and (max-width: 280px) {
    font-size: 1.5rem;
  }
`;

export const TagWrapper = styled.div`
  width: 100%;
`;
