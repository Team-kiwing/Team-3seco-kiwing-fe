import styled from 'styled-components';

import { FONT_SEMI_BOLD } from '@/constants';
import { MOBILE_MIN } from '@/constants';
import { Col } from '@/styles/globalStyles';

export const BundleCardWrapper = styled.div`
  width: 40%;
  margin-bottom: 2rem;

  @media screen and (max-width: 1000px) {
    width: 70rem;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 560px) {
    width: 36rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: ${MOBILE_MIN}px) {
    width: 26rem;
    height: 9rem;
    margin-bottom: 1rem;
  }
`;

export const BundleCardItemWrapper = styled(Col)`
  width: 100%;
  margin-top: 1.5rem;
  margin-left: 2rem;
  margin-bottom: 1rem;

  @media screen and (max-width: ${MOBILE_MIN}px) {
    width: 26rem;
    margin-bottom: 1rem;
  }
`;

export const BundleCardItemName = styled.div`
  font-size: 2rem;
  font-weight: ${FONT_SEMI_BOLD - 100};
  margin-bottom: 1.5rem;
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
