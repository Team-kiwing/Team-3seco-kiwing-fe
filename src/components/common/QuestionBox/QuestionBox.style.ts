import { styled } from 'styled-components';

import {
  BORDER_MOBILE,
  BORDER_WEB,
  MOBILE,
  MOBILE_FONT_SIZE,
  WEB_FONT_SIZE,
} from '@/constants';
import { Row } from '@/styles/globalStyles';

export const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.section`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  border-radius: ${BORDER_WEB}rem;
  border: 0.1rem solid ${(props) => props.theme.border_color};

  @media screen and (max-width: ${MOBILE}px) {
    border-radius: ${BORDER_MOBILE}rem;
  }
`;

export const TitleWrapper = styled(Row)<{ $isActive: boolean }>`
  transition: background-color 0.35s ease;
  border-radius: ${(props) =>
    props.$isActive
      ? `${BORDER_WEB - 0.1}rem ${BORDER_WEB - 0.1}rem 0 0`
      : `${BORDER_WEB - 0.1}rem`};
  background-color: ${(props) =>
    props.$isActive ? props.theme.border_color : props.theme.background_color};
  font-size: ${WEB_FONT_SIZE}rem;
  color: ${(props) => props.theme.primary_color};
  @media screen and (max-width: ${MOBILE}px) {
    border-radius: ${(props) =>
      props.$isActive
        ? `${BORDER_MOBILE - 0.2}rem ${BORDER_MOBILE - 0.2}rem 0 0`
        : `${BORDER_MOBILE - 0.2}rem`};
  }
`;

export const Header = styled.div`
  min-height: 7.5rem;
  height: fit-content;
  display: flex;
  padding: 1rem 0rem 1rem 2.8rem;
  justify-content: start;
  margin: 0;
  align-items: center;
  cursor: pointer;
  width: 100%;
  font-weight: 300;
  font-size: ${WEB_FONT_SIZE + 0.2}rem;
  white-space: pre-line;
  word-break: break-all;

  @media screen and (max-width: ${MOBILE}px) {
    min-height: 3rem;
    padding: 1rem 0rem 1rem 1.8rem;
    font-size: ${WEB_FONT_SIZE}rem;
  }
`;

export const HeaderText = styled.span`
  cursor: text;
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
  background-color: ${(props) => props.theme.background_color};
  border-radius: ${BORDER_WEB - 0.1}rem;
  overflow: hidden;
  transition:
    height 0.3s ease,
    opacity 0.3s ease;
`;

export const Body = styled.div<{ $isEmpty: boolean }>`
  padding: 2rem;
  line-height: normal;
  word-break: break-all;
  font-size: calc(${WEB_FONT_SIZE}rem);
  color: ${(props) =>
    props.$isEmpty ? props.theme.gray_300 : props.theme.primary_color};
  font-weight: 300;
  white-space: pre-line;
  @media screen and (max-width: ${MOBILE}px) {
    padding: 1rem;
    font-size: calc(${MOBILE_FONT_SIZE}rem);
    margin-bottom: 0.5rem;
  }

  cursor: auto;
`;

export const EditBody = styled.div`
  width: 100%;
  overflow-y: auto;
  outline: none;
  color: ${(props) => props.theme.primary_color};
`;
