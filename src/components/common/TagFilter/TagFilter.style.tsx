import styled from 'styled-components';

import { MOBILE, MOBILE_MIN } from '@/constants';

export const TagFilterWrapper = styled.div`
  max-width: 110rem;

  @media screen and (max-width: 1000px) {
    width: 80rem;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 560px) {
    width: 36rem;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 280px) {
    width: 26rem;
    margin-bottom: 2rem;
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
    padding: 1rem;
  }
  @media screen and (max-width: ${MOBILE_MIN}px) {
    width: 100%;
    padding: 1rem;
  }
`;

export const TextWrapper = styled.div`
  width: 8%;
  min-width: 46px;
  gap: 1px;
  font-size: 2rem;
  padding-top: 5px;
  padding-left: 10px;
  white-space: nowrap;
  @media screen and (max-width: ${MOBILE}px) {
    width: 8%;
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
