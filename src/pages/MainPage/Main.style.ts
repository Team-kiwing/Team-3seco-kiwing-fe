import styled from 'styled-components';

import { BORDER_MOBILE, BORDER_WEB, MOBILE } from '@/constants';
import { Col } from '@/styles/globalStyles';

export const MainPageWrapper = styled(Col)`
  width: 80%;
  max-width: 1200px;
  margin: 3rem auto;

  @media screen and (max-width: ${MOBILE}px) {
    width: 90%;
    margin: 2rem auto;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 20rem;
  border-radius: ${BORDER_WEB}rem;
  background-image: url('/mainBanner.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  cursor: pointer;

  @media screen and (max-width: ${MOBILE}px) {
    height: 10rem;
    border-radius: ${BORDER_MOBILE}rem;
  }
`;

export const MainListWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 5rem;

  @media screen and (max-width: ${MOBILE}px) {
    flex-direction: column;
    margin-top: 3rem;
  }
`;

export const MainItemWrapper = styled(Col)`
  width: 40%;
  gap: 3rem;

  @media screen and (max-width: ${MOBILE}px) {
    width: 100%;
    gap: 2rem;
    align-items: center;
  }
`;

export const MainListHeader = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary_color};

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.8rem;
  }
`;

export const MainQuestionsBox = styled.div`
  width: 100%;

  @media screen and (max-width: ${MOBILE}px) {
    width: 90%;
    margin-bottom: 1rem;
  }
`;

export const MainBundlesBox = styled.div`
  width: 100%;
`;

export const VerticalDivider = styled.hr`
  border: none;
  background-color: ${({ theme }) => theme.border_color};
  position: relative;
  width: 0.1rem;
  height: 50rem;
  vertical-align: middle;
  margin-top: 6rem;
`;

export const HorizontalDivider = styled.hr`
  border: none;
  background-color: ${({ theme }) => theme.border_color};
  display: block;
  width: 100%;
  height: 0.1rem;
  margin: 4rem 0;
`;
