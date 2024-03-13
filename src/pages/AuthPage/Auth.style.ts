import styled from 'styled-components';

import { FONT_BOLD, FONT_SEMI_BOLD, MOBILE } from '@/constants';
import { Col, Row } from '@/styles/globalStyles';

import { AuthPageStyleProps } from './Auth.type';

export const AuthPageWrapper = styled(Row)`
  width: 80%;
  max-width: 1200px;
  margin: 3rem auto;
  align-items: center;

  @media screen and (max-width: ${MOBILE}px) {
    width: 80%;
    margin: 2rem auto;
  }
`;

export const AuthLogo = styled(Row)`
  width: 40%;
  justify-content: center;
  & > img {
    width: 100%;
    max-width: 30rem;
  }
`;

export const AuthContentWrapper = styled(Col)`
  width: 60%;

  @media screen and (max-width: ${MOBILE}px) {
    width: 100%;
  }
`;

export const AuthHeader = styled.h1`
  font-size: 5rem;
  font-weight: ${FONT_BOLD};
  margin-bottom: 2rem;
  word-break: keep-all;
  color: ${({ theme }) => theme.primary_color};

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 3rem;
  }
`;

export const AuthDescription = styled.div`
  font-size: 1.8rem;
  font-weight: ${FONT_SEMI_BOLD};
  line-height: 2.5rem;
  margin-bottom: 5rem;
  word-break: keep-all;
  color: ${({ theme }) => theme.primary_color};

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

export const AuthSubHeader = styled.div`
  font-size: 2.5rem;
  font-weight: ${FONT_BOLD};
  margin-bottom: 2rem;
  word-break: keep-all;
  color: ${({ theme }) => theme.primary_color};

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.8rem;
  }
`;

export const AuthGoogleWrapper = styled.div<AuthPageStyleProps>`
  width: 25rem;
  border-radius: 10rem;
  cursor: pointer;

  @media screen and (max-width: ${MOBILE}px) {
    width: 17rem;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      box-shadow: 0.2rem 0.2rem 2rem 0.5rem
        ${({ $isDarkMode }) =>
          $isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    }
  }

  & > img {
    width: 100%;
  }
`;
