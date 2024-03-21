import styled from 'styled-components';

import { FONT_MEDIUM, MOBILE_FONT_SIZE, WEB_FONT_SIZE } from '@/constants';
import { MOBILE, MOBILE_MIN } from '@/constants';
import { Row } from '@/styles/globalStyles';

export const AllCheckWrapper = styled(Row)`
  width: 90%;
  margin: 2rem auto 1rem;
  justify-content: end;
  padding: 1rem 0.9rem 1rem 0rem;
  box-sizing: border-box;
  gap: 1rem;
  @media screen and (max-width: ${MOBILE}px) {
    padding: 0.5rem 0.9rem 0rem 0rem;
  }
`;
export const SharedBundleBoxWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  padding: 1rem;
  margin: 0 auto;
  gap: 2rem;
  overflow-x: hidden;
  overflow-y: auto;
  height: 41rem;
  @media screen and (max-width: ${MOBILE}px) {
    gap: 1rem;
    height: 100%;
  }
  @media screen and (max-width: ${MOBILE_MIN}px) {
    gap: 1rem;
    height: 100%;
  }
`;

export const SharedBundleBoxFooter = styled(Row)`
  width: 90%;
  margin: 2rem auto;
  position: relative;
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

export const EmptyContent = styled.span`
  font-size: ${WEB_FONT_SIZE}rem;
  font-weight: ${FONT_MEDIUM};
  text-align: center;
  padding: 10rem 0;

  @media screen and (max-width: ${MOBILE}px) {
    font-size: ${MOBILE_FONT_SIZE}rem;
    padding: 2rem;
  }

  @media screen and (max-width: ${MOBILE_MIN}px) {
    font-size: ${MOBILE_FONT_SIZE}rem;
    padding: 2rem;
  }
`;
