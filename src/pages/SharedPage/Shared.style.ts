import styled from 'styled-components';

import { MOBILE, MOBILE_FONT_SIZE } from '@/constants';
import { Col, Row } from '@/styles/globalStyles';

export const SharedWrapper = styled(Col)`
  width: 70%;
  margin: 0 auto;
  gap: 3rem;

  @media screen and (max-width: ${MOBILE}px) {
    width: 90%;
    gap: 1.5rem;
  }
`;

export const TagFilterWrapper = styled(Row)`
  width: 100%;
  margin: 5rem auto;
  justify-content: center;

  @media screen and (max-width: ${MOBILE}px) {
    margin: 2rem auto;
  }
`;

export const SearchWrapper = styled(Row)`
  width: 100%;
  height: 4rem;

  @media screen and (max-width: ${MOBILE}px) {
    height: 3rem;
  }
`;

export const SelectorWrapper = styled(Row)`
  margin: 1rem 0;
  justify-content: end;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  margin: 0 auto;
  grid-row-gap: 2rem;
  grid-column-gap: 7rem;
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;
  justify-items: center;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SharedSearchNone = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.primary_color};
`;

export const SharedFooterWrapper = styled(Col)`
  width: 70%;
  margin: 0 auto;
  padding: 2rem 1rem;
  box-sizing: border-box;
`;

export const SharedInfiniteMessage = styled(Col)`
  margin: 0 auto;
  color: ${({ theme }) => theme.primary_color};
  align-items: center;
  font-size: 1.8rem;
  padding: 2rem 1rem;
  box-sizing: border-box;

  @media screen and (max-width: ${MOBILE}px) {
    font-size: ${MOBILE_FONT_SIZE}rem;
    padding: 1rem 0.5rem;
  }
`;

export const SharedSearchError = styled(SharedSearchNone)`
  display: flex;
  width: 100%;
  justify-content: center;
`;
