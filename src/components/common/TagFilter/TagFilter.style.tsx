import styled from 'styled-components';

import { MOBILE, MOBILE_MIN } from '@/constants';

export const TagFilterWrapper = styled.div`
  max-width: 100rem;
  margin: 0 auto;

  @media screen and (max-width: ${MOBILE}px) {
    max-width: 40rem;
  }
  @media screen and (max-width: ${MOBILE_MIN}px) {
    max-width: 28rem;
  }
`;

export const TagItemWrapper = styled.div`
  display: flex;
  padding: 1.5rem 1.5rem 5.5rem 1.5rem;
  width: 95%;
  height: 95%;
  margin: 0 auto;

  @media screen and (max-width: ${MOBILE}px) {
    width: 100%;
    padding: 1.5rem;
  }
  @media screen and (max-width: ${MOBILE_MIN}px) {
    width: 100%;
    padding: 1.5rem;
  }
`;

export const TextWrapper = styled.div`
  width: 8%;
  gap: 1px;
  font-size: 2rem;
  padding-top: 5px;
  padding-left: 10px;
  white-space: nowrap;
  @media screen and (max-width: ${MOBILE}px) {
    width: 15%;
  }
`;

export const Label = styled.span`
  font-size: 2.5rem;
  @media screen and (max-width: ${MOBILE}px) {
    font-size: 2rem;
  }
  @media screen and (max-width: ${MOBILE_MIN}px) {
    font-size: 1.5rem;
  }
`;

export const BadgeWrapper = styled.div`
  width: 100%;
`;
