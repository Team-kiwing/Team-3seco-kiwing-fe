import { styled } from 'styled-components';

import { MOBILE } from '@/constants';
import { Col } from '@/styles/globalStyles';

export const SharedItemWrapper = styled(Col)`
  width: 80%;
  max-width: 120rem;
  align-items: center;
  margin: 0 auto;
  padding: 3rem 0;
  gap: 2rem;

  @media screen and (max-width: ${MOBILE}px) {
    padding: 2rem 0;
    width: 100%;
    gap: 1.5rem;
  }
`;

export const UserInfoWrapper = styled.div`
  width: 100%;
`;

export const SharedWrapper = styled(Col)`
  width: 100%;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: ${MOBILE}px) {
    width: 90%;
    gap: 1.5rem;
  }
`;
