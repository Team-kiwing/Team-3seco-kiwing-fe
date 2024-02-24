import styled from 'styled-components';

import { FONT_SEMI_BOLD } from '@/constants';
import { MOBILE, MOBILE_MIN } from '@/constants';
import { Col } from '@/styles/globalStyles';

export const BundleCardWrapper = styled.div`
  width: 90%;
  max-width: 40rem;
  min-width: 26rem;
`;

export const BundleCardItemWrapper = styled(Col)`
  width: 90%;
  margin: 1.5rem 2rem;
  @media screen and (max-width: ${MOBILE}px) {
    gap: 1rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const BundleCardContentItem = styled.div``;

export const BundleCardItemName = styled.div`
  font-size: 2rem;
  font-weight: ${FONT_SEMI_BOLD - 50};
  margin-top: 0.2rem;
  margin-bottom: 1rem;

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  @media screen and (max-width: ${MOBILE_MIN}px) {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
`;

export const BundleCardBadgeWrapper = styled.div`
  display: flex;
  margin-top: 0.8rem;
  gap: 10px;
  @media screen and (max-width: ${MOBILE}px) {
    display: flex;
    flex-direction: column;
    margin-top: 0rem;
  }
`;
