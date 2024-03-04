import styled from 'styled-components';

import { MOBILE, MOBILE_MIN } from '@/constants';
import { Row } from '@/styles/globalStyles';
export const TagFilterWrapper = styled.div`
  width: 100%;
`;

export const TagItemWrapper = styled(Row)`
  padding: 1.5rem 1.5rem 5.5rem 1.5rem;
  width: 95%;
  height: 100%;
  gap: 0.5rem;
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
  width: 10%;
  max-width: 4.5rem;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  white-space: nowrap;
  @media screen and (max-width: ${MOBILE}px) {
    padding: 0.2rem 0.5rem;
  }
`;

export const Label = styled.span`
  font-size: 2rem;
  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: ${MOBILE_MIN}px) {
    font-size: 1.4rem;
  }
`;

export const BadgeWrapper = styled.div`
  width: 100%;
`;
