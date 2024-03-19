import { styled } from 'styled-components';

import { MOBILE, MOBILE_FONT_SIZE } from '@/constants';
import { Col, Row } from '@/styles/globalStyles';

export const HubLayout = styled(Col)`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0;
  gap: 2rem;

  @media screen and (max-width: ${MOBILE}px) {
    width: 90%;
    gap: 1.5rem;
    padding: 2rem 0;
  }
`;

export const HubTagFilterContainer = styled.section`
  width: 100%;
  margin-bottom: 2rem;
  justify-content: center;
`;

export const HubSearchBarContainer = styled(Row)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 3rem 1rem 0rem 1rem;

  @media screen and (max-width: ${MOBILE}px) {
    flex-direction: column;
    padding-bottom: 1rem;
  }
`;

export const HubQuestionCardContainer = styled.section<{ $isLogin: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;

  @media screen and (max-width: ${MOBILE}px) {
    width: ${({ $isLogin }) => ($isLogin ? '95%' : '100%')};
  }
`;

export const HubSpinnerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.001);
  z-index: 10;
`;

export const HubFooterContainer = styled(Col)`
  width: 70%;
  margin: 0 auto;
  padding: 2rem 1rem 0rem 1rem;
  box-sizing: border-box;
  @media screen and (max-width: ${MOBILE}px) {
    padding: 2rem 1rem 1rem 1rem;
  }
`;

export const HubInfiniteMessage = styled(Col)`
  margin: 0 auto;
  color: ${({ theme }) => theme.primary_color};
  align-items: center;
  font-size: 1.8rem;
  padding: 2rem 1rem;
  box-sizing: border-box;

  @media screen and (max-width: ${MOBILE}px) {
    font-size: ${MOBILE_FONT_SIZE}rem;
    padding: 1rem 0.5rem;
  }
`;

export const HubSearchNone = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.primary_color};
`;

export const HubSearchError = styled(HubSearchNone)`
  display: flex;
  width: 100%;
  justify-content: center;
`;
