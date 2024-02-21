import styled from 'styled-components';

import { FONT_SEMI_BOLD } from '@/constants';
import { MOBILE, MOBILE_MIN } from '@/constants';
import { Col } from '@/styles/globalStyles';

export const BundleCardWrapper = styled.div`
  width: 100%;
  max-width: 40rem;
  min-width: 26rem;
`;

export const BundleCardItemWrapper = styled(Col)`
  width: 100%;
  margin-top: 1.5rem;
  margin-left: 2rem;
  margin-bottom: 1rem;
`;

export const BundleCardItemName = styled.div`
  font-size: 2rem;
  font-weight: ${FONT_SEMI_BOLD - 150};
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

export const BundleCardItemContent = styled.div`
  margin-left: 0.5rem;
`;

export const BundleCardHashTagWrapper = styled.div``;

export const BundleCardBadgeWrapper = styled.div``;
