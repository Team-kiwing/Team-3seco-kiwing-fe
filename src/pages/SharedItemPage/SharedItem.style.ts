import { styled } from 'styled-components';

import { MOBILE } from '@/constants';
import { Col } from '@/styles/globalStyles';

export const SharedItemWrapper = styled(Col)`
  width: 70%;
  align-items: center;
  margin: 0 auto;
  gap: 3rem;
  @media screen and (max-width: ${MOBILE}px) {
    width: 100%;
    gap: 1.5rem;
  }
`;

export const UserInfoWrapper = styled.div`
  margin-top: 5rem;
  width: 100%;
  @media screen and (max-width: ${MOBILE}px) {
    margin-top: 1rem;
  }
`;

export const SharedWrapper = styled(Col)`
  width: 100%;
  align-items: center;
  gap: 3rem;
  @media screen and (max-width: ${MOBILE}px) {
    width: 90%;
    gap: 1.5rem;
  }
`;
