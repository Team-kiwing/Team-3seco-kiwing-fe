import styled from 'styled-components';

import { BORDER_MOBILE, BORDER_WEB, MOBILE } from '@/constants';

export const MainPageWrapper = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 3rem auto;

  @media screen and (max-width: ${MOBILE}px) {
    width: 90%;
    margin: 2rem auto;
  }
`;

export const MainUserInfoCardBox = styled.section`
  width: 80%;
  max-width: 1200px;
  margin: 3rem auto 0 auto;

  @media screen and (max-width: ${MOBILE}px) {
    width: 100%;
    margin: 3rem auto 0 auto;
  }
`;

export const Banner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: ${BORDER_WEB}rem;
  margin-top: 3rem;
  user-select: none;

  @media screen and (max-width: ${MOBILE}px) {
    border-radius: ${BORDER_MOBILE}rem;
  }

  & > img {
    width: 40%;
    height: 100%;
    max-width: 1200px;
    cursor: pointer;

    @media screen and (max-width: ${MOBILE}px) {
      width: 90%;
    }
  }
`;

export const MainListWrapper = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: ${MOBILE}px) {
    flex-direction: column;
  }
`;

export const MainItemWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 3rem;

  @media screen and (max-width: ${MOBILE}px) {
    width: 100%;
    gap: 2rem;
  }
`;

export const MainListHeader = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.primary_color};
  font-weight: 500;

  @media screen and (max-width: ${MOBILE}px) {
    text-align: center;
    font-size: 1.8rem;
  }
`;

export const MainQuestionsBox = styled.article<{ $isLogin: boolean }>`
  width: 100%;

  @media screen and (max-width: ${MOBILE}px) {
    width: ${({ $isLogin }) => ($isLogin ? '95%' : '100%')};
    margin-bottom: 1rem;
  }
`;

export const MainBundlesBox = styled.article`
  width: 100%;
`;

export const VerticalDivider = styled.div`
  border: none;
  background-color: ${({ theme }) => theme.border_color};
  position: relative;
  width: 0.1rem;
  vertical-align: middle;
  margin-top: 6rem;
`;

export const HorizontalDivider = styled.div`
  border: none;
  background-color: ${({ theme }) => theme.border_color};
  display: block;
  width: 100%;
  height: 0.1rem;
  margin: 4rem 0;
`;
