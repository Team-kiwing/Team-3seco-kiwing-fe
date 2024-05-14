import styled from 'styled-components';

import { FONT_BOLD, FONT_REGULAR, MOBILE } from '@/constants';

export const UserInfoWrapper = styled.section`
  @media screen and (max-width: ${MOBILE}px) {
    padding: 1rem;
  }

  background-color: ${({ theme }) => theme.background_color};
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  box-sizing: border-box;
  align-items: center;
  border-radius: 0.8rem;

  & > :nth-child(1),
  & > :nth-child(3) {
    flex-shrink: 0;
  }

  & > :nth-child(2) {
    flex-grow: 1;
    overflow: hidden;
  }
`;

export const UserInfoContentsWrapper = styled.section`
  @media screen and (max-width: ${MOBILE}px) {
    padding: 0 1rem;
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

export const UserInfoNicknameBadgeWrapper = styled.section`
  @media screen and (max-width: ${MOBILE}px) {
    gap: 0.8rem;
  }

  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const UserInfoNickname = styled.section`
  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.6rem;
  }

  color: ${({ theme }) => theme.primary_color};
  font-size: 2rem;
  font-weight: ${FONT_BOLD};
`;

export const UserInfoBadgeWrapper = styled.section`
  & > span {
    margin: 0.1rem;
  }
`;

export const UserInfoLinkWrapper = styled.section`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;

  @media screen and (max-width: ${MOBILE}px) {
    gap: 1.3rem;
  }
`;

export const UserInfoLink = styled.section`
  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.2rem;
  }

  width: fit-content;
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.primary_color};
  font-size: 1.4rem;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;

  & > a {
    width: 100%;
    color: ${({ theme }) => theme.gray_400};
    text-decoration: none;
    line-height: normal;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const UserInfoIconWrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.primary_color};
`;

export const NoTags = styled.section`
  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1rem;
  }

  color: ${({ theme }) => theme.gray_500}80;
  font-size: 1.2rem;
  font-weight: ${FONT_REGULAR};
  cursor: default;
  user-select: none;
`;

export const NoLinks = styled.section`
  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1rem;
  }

  color: ${({ theme }) => theme.gray_500}80;
  font-size: 1.2rem;
  font-weight: ${FONT_REGULAR};
  cursor: default;
  user-select: none;
`;
