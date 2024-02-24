import styled from 'styled-components';

import { MOBILE, MOBILE_MIN } from '@/constants';

export const SharedBundleCardWrapper = styled.div`
  width: 90%;
  max-width: 80rem;
  min-width: 28rem;
  height: 7rem;
  @media screen and (max-width: ${MOBILE}px) {
    height: 5rem;
  }
`;

export const BundleTitle = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.secondary_color};

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: ${MOBILE_MIN}px) {
    font-size: 1.4rem;
  }
`;

export const ClickContent = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  margin-right: 1rem;
  gap: 1rem;
`;
