import { styled } from 'styled-components';

import {
  BORDER_MOBILE,
  BORDER_WEB,
  FONT_REGULAR,
  MOBILE,
  MOBILE_FONT_SIZE,
  WEB_FONT_SIZE,
} from '@/constants';
import { Row } from '@/styles/globalStyles';

export const Container = styled.div`
  width: 100%;
  position: relative;
  border-radius: ${BORDER_WEB}rem;
  border: 0.1rem solid ${(props) => props.theme.border_color};

  @media screen and (max-width: ${MOBILE}px) {
    border-radius: ${BORDER_MOBILE}rem;
  }
`;

export const TitleWrapper = styled(Row)<{ $isActive: boolean }>`
  transition: background-color 0.35s ease;
  border-radius: ${BORDER_WEB}rem ${BORDER_WEB}rem 0 0;

  background-color: ${(props) =>
    props.$isActive ? props.theme.border_color : 'transparent'};
  font-size: ${WEB_FONT_SIZE}rem;
  color: ${(props) => props.theme.primary_color};
  @media screen and (max-width: ${MOBILE}px) {
    font-size: ${MOBILE_FONT_SIZE}rem;
    border-radius: ${BORDER_MOBILE}rem ${BORDER_MOBILE}rem 0 0;
  }
`;

export const Header = styled.h1`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  font-weight: ${FONT_REGULAR};
  font-size: ${WEB_FONT_SIZE}rem;

  @media screen and (max-width: ${MOBILE}px) {
    font-size: ${MOBILE_FONT_SIZE}rem;
  }
`;

export const RightItem = styled(Row)`
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: calc(${WEB_FONT_SIZE}rem - 0.2rem);

  @media screen and (max-width: ${MOBILE}px) {
    font-size: calc(${MOBILE_FONT_SIZE}rem - 0.2rem);
  }
`;

export const BodyWrapper = styled.div`
  height: 0;
  padding: 0 0.8rem;
  background-color: transparent;
  overflow: hidden;
  transition:
    height 0.5s ease,
    opacity 0.5s ease;

  @media screen and (max-width: ${MOBILE}px) {
    font-size: calc(${MOBILE_FONT_SIZE}rem - 0.2rem);
  }
`;

export const Body = styled.div<{ $isEmpty: boolean }>`
  padding: 2rem;
  line-height: normal;
  word-break: break-all;
  font-size: calc(${WEB_FONT_SIZE}rem - 0.2rem);
  color: ${(props) =>
    props.$isEmpty ? props.theme.gray_300 : props.theme.primary_color};

  white-space: pre-line;
  @media screen and (max-width: ${MOBILE}px) {
    padding: 1rem;
    font-size: calc(${MOBILE_FONT_SIZE}rem - 0.2rem);
    margin-bottom: 0.5rem;
  }

  cursor: auto;
`;

export const EditBody = styled.div`
  width: 100%;
  max-height: 20rem;
  overflow-y: auto;
  outline: none;
`;
