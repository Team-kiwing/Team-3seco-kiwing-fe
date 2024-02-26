import styled from 'styled-components';

import { FONT_SEMI_BOLD, MOBILE, MOBILE_MIN } from '@/constants';

export const SharedBundleCardWrapper = styled.div`
  width: 90%;
  max-width: 80rem;
  min-width: 28rem;
`;

export const BundleTitle = styled.div`
  font-size: 2rem;
  padding: 2rem;
  font-weight: ${FONT_SEMI_BOLD - 50};
  width: 70%;
  text-align: center;
  color: ${({ theme }) => theme.secondary_color};

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.6rem;
    padding: 1.5rem;
  }

  @media screen and (max-width: ${MOBILE_MIN}px) {
    font-size: 1.4rem;
    padding: 1rem;
  }
`;

export const ClickContent = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  margin: 0 1rem;
  gap: 1rem;
`;
