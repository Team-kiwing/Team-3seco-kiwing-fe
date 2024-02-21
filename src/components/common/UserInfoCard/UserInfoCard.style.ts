import styled from 'styled-components';

import { FONT_BOLD, MOBILE } from '@/constants';
import { Col, Row } from '@/styles/globalStyles';

export const UserInfoWrapper = styled(Row)`
  @media screen and (max-width: ${MOBILE}px) {
    padding: 1rem;
  }

  background-color: ${({ theme }) => theme.background_color};
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  align-items: center;

  & > :nth-child(1),
  & > :nth-child(3) {
    flex-shrink: 0;
  }

  & > :nth-child(2) {
    flex-grow: 1;
  }
`;

export const UserInfoContentsWrapper = styled(Col)`
  @media screen and (max-width: ${MOBILE}px) {
    padding: 0 1rem;
  }

  padding: 0 2rem;
`;

export const UserInfoNicknameBadgeWrapper = styled(Row)`
  @media screen and (max-width: ${MOBILE}px) {
    gap: 0.8rem;
  }

  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const UserInfoNickname = styled.div`
  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.6rem;
  }

  color: ${({ theme }) => theme.primary_color};
  font-size: 2rem;
  font-weight: ${FONT_BOLD};
`;

export const UserInfoBadgeWrapper = styled.div`
  & > span {
    margin: 0.1rem;
  }
`;

export const UserInfoLinkWrapper = styled(Col)`
  margin-top: 1rem;
  gap: 0.5rem;
`;

export const UserInfoLink = styled(Row)`
  @media screen and (max-width: ${MOBILE}px) {
    font-size: 0.8rem;
  }

  color: ${({ theme }) => theme.primary_color};
  font-size: 1.2rem;
  gap: 0.3rem;
  align-items: center;
  & > a {
    width: 80%;
    color: ${({ theme }) => theme.gray_500};
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const UserInfoIconWrapper = styled(Col)`
  height: 100%;
  justify-content: space-between;
  color: ${({ theme }) => theme.primary_color};
`;
