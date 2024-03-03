import styled from 'styled-components';

import { FONT_BOLD, FONT_SEMI_BOLD } from '@/constants';
import { Col, Row } from '@/styles/globalStyles';

import { AuthPageStyleProps } from './Auth.type';

export const AuthPageWrapper = styled(Row)`
  width: 80%;
  margin: 6rem auto 0 auto;
  align-items: center;
`;

export const AuthLogo = styled.div`
  width: 40%;
  & > img {
    width: 100%;
  }
`;

export const AuthContentWrapper = styled(Col)<AuthPageStyleProps>`
  width: ${(props) => (props.$isMobile ? '100%' : '60%')};
  padding: ${(props) => (props.$isMobile ? '' : '0 5rem')};
  margin-bottom: 3rem;
`;

export const AuthHeader = styled.div<AuthPageStyleProps>`
  font-size: ${(props) => (props.$isMobile ? '3rem' : '5rem')};
  font-weight: ${FONT_BOLD};
  margin-bottom: 2rem;
  word-break: keep-all;
  color: ${({ theme }) => theme.primary_color};
`;

export const AuthDescription = styled.div<AuthPageStyleProps>`
  font-size: ${(props) => (props.$isMobile ? `1.4rem` : '1.8rem')};
  font-weight: ${FONT_SEMI_BOLD};
  line-height: ${(props) => (props.$isMobile ? `2rem` : '2.5rem')};
  margin-bottom: 5rem;
  word-break: keep-all;
  color: ${({ theme }) => theme.primary_color};
`;

export const AuthSubHeader = styled.div<AuthPageStyleProps>`
  font-size: ${(props) => (props.$isMobile ? '1.8rem' : '2.5rem')};
  font-weight: ${FONT_BOLD};
  margin-bottom: 2rem;
  word-break: keep-all;
  color: ${({ theme }) => theme.primary_color};
`;

export const AuthGoogleWrapper = styled.div<AuthPageStyleProps>`
  width: ${(props) => (props.$isMobile ? '17rem' : '25rem')};
  border-radius: 10rem;
  cursor: pointer;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      box-shadow: 0.2rem 0.2rem 2rem 0.5rem
        ${(props) =>
          props.$isDarkMode
            ? 'rgba(255, 255, 255, 0.1)'
            : 'rgba(0, 0, 0, 0.1)'};
    }
  }

  & > img {
    width: 100%;
  }
`;
