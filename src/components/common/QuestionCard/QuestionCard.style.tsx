import styled, { css } from 'styled-components';

import { FONT_REGULAR, MOBILE } from '@/constants';
import { Col, Row } from '@/styles/globalStyles';

export const QuestionCardAddButton = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: -2.5rem;
  top: 50%;
  bottom: 50%;

  @media screen and (max-width: ${MOBILE}px) {
    right: -2.25rem;
  }
`;

export const QuestionCardContainer = styled(Row)`
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: ${MOBILE}px) {
    flex-direction: column;
  }
`;

export const QuestionCardBodyWrapper = styled(Col)`
  flex-grow: 1;
  gap: 1rem;
  margin: 1.5rem 2rem;
`;

export const QuestionCardText = styled.div`
  max-width: 100%;
  word-break: break-all;
  font-size: 2rem;
  font-weight: ${FONT_REGULAR};
  line-height: normal;

  @media screen and (max-width: ${MOBILE}px) {
    max-width: 95%;
    word-break: break-all;
    font-size: 1.6rem;
  }
`;

export const QuestionCardHashTags = styled.div`
  @media screen and (max-width: ${MOBILE}px) {
    padding: 0.1rem 1rem 0.1rem 0.1rem;
  }
`;

export const QuestionCardBadgeWrapper = styled(Col)`
  justify-content: space-between;
  align-items: flex-end;

  @media screen and (max-width: ${MOBILE}px) {
    flex-direction: row;
  }
`;

export const QuestionCardInfoBadges = styled(Row)<{ $isLogin: boolean }>`
  display: flex;
  gap: 1rem;
  height: fit-content;

  & > span {
    display: flex;
    align-items: center;
  }

  ${({ $isLogin }) => {
    if ($isLogin) {
      return css`
        padding: 1.5rem 3.5rem 1rem 1rem;
      `;
    } else {
      return css`
        padding: 1.5rem 1rem 1rem 1rem;
      `;
    }
  }}

  @media screen and (max-width: ${MOBILE}px) {
    flex-direction: row-reverse;
    padding: 0rem 1rem 1rem 1.5rem;
  }
`;

export const QuestionCardReportBadge = styled(Row)`
  height: fit-content;
  padding: 1.5rem 3.5rem 1rem 1rem;

  & > span {
    font-weight: 700;
    padding: 0.4rem 0.8rem;
  }

  @media screen and (max-width: ${MOBILE}px) {
    padding: 0.5rem 1.5rem 1rem 2rem;

    & > span {
      font-size: 1.1rem;
      padding: 0.3rem 0.6rem;
    }
  }
`;
