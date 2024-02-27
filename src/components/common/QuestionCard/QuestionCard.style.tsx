import styled from 'styled-components';

import { FONT_MEDIUM, MOBILE } from '@/constants';
import { Col, Row } from '@/styles/globalStyles';

export const QuestionCardAddButton = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: -3rem;
  top: 50%;
  bottom: 50%;
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
  justify-content: space-around;
`;

export const QuestionCardText = styled.div`
  max-width: 90%;
  word-break: keep-all;
  padding: 1rem 1rem 1rem 2rem;
  font-weight: ${FONT_MEDIUM};
  line-height: normal;
`;

export const QuestionCardHashTags = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 2rem;
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

export const QuestionCardInfoBadges = styled(Row)`
  display: flex;
  gap: 1rem;
  height: fit-content;
  padding: 1rem 2rem 1rem 1rem;

  @media screen and (max-width: ${MOBILE}px) {
    flex-direction: row-reverse;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
  }
`;

export const QuestionCardReportBadge = styled(Row)`
  padding: 1rem 2rem 1rem 1rem;
  height: fit-content;

  @media screen and (max-width: ${MOBILE}px) {
    padding: 0.1rem 0.5rem 0.5rem 0.1rem;
  }
`;
