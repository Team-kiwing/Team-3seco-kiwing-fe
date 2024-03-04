import styled from 'styled-components';

import { MOBILE, MOBILE_MIN } from '@/constants';
import { Col, Row } from '@/styles/globalStyles';

export const AllCheckWrapper = styled(Row)`
  width: 90%;
  margin: 2rem auto 1rem;
  justify-content: end;
  padding: 1rem 1.2rem 1rem 0rem;
  box-sizing: border-box;
  gap: 1rem;
  @media screen and (max-width: ${MOBILE}px) {
    padding: 0.5rem 1.2rem 0rem 0rem;
  }
`;
export const SharedBundleBoxWrapper = styled(Col)`
  width: 90%;
  height: 100%;
  padding: 1rem;
  margin: 0 auto;
  gap: 2rem;
  overflow-x: hidden;
  overflow-y: auto;
  height: 30rem;
  @media screen and (max-width: ${MOBILE}px) {
    gap: 1rem;
    height: 20rem;
  }
  @media screen and (max-width: ${MOBILE_MIN}px) {
    gap: 1rem;
    height: 16rem;
  }
`;

export const SharedBundleBoxFooter = styled(Row)`
  width: 90%;
  margin: 2rem auto;
  justify-content: space-between;
  @media screen and (max-width: ${MOBILE}px) {
    margin: 1rem auto;
  }
`;

export const CountText = styled(Row)`
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.gray_200};
`;

export const DropDownWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20rem;
`;
