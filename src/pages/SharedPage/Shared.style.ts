import styled from 'styled-components';

import { MOBILE, MOBILE_FONT_SIZE, WEB_FONT_SIZE } from '@/constants';
import { Col, Row } from '@/styles/globalStyles';

export const SharedWrapper = styled(Col)`
  width: 80%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 3rem 0;
  gap: 2rem;

  @media screen and (max-width: ${MOBILE}px) {
    width: 90%;
    gap: 1.5rem;
    margin: 0 auto;
    padding: 2rem 0;
  }
`;

export const TagFilterWrapper = styled.section`
  width: 100%;
  margin-bottom: 2rem;
  justify-content: center;
`;

export const SearchWrapper = styled(Row)`
  width: 100%;
  height: 4rem;
`;

export const SelectorWrapper = styled(Row)`
  justify-content: end;
`;

export const CardWrapper = styled.section`
  display: grid;
  -webkit-box-align: start;
  align-items: start;
  column-gap: 7rem;
  grid-template-columns: repeat(2, minmax(0px, 1fr));

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 2rem;
  }
  @media screen and (max-width: ${MOBILE}px) {
    row-gap: 0rem;
  }
`;

export const Section1 = styled.div`
  display: grid;
  row-gap: 2rem;
`;

export const Section2 = styled.div`
  display: grid;
  row-gap: 2rem;
  @media screen and (max-width: ${MOBILE}px) {
    margin-top: 2rem;
  }
`;

export const SharedSearchNone = styled(Row)`
  align-items: center;
  justify-content: center;
  font-size: ${WEB_FONT_SIZE}rem;
  color: ${({ theme }) => theme.primary_color};

  @media screen and (max-width: ${MOBILE}px) {
    font-size: ${MOBILE_FONT_SIZE}rem;
  }
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

export const SharedNextPageNone = styled.div`
  text-align: center;
  margin: 2rem auto;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.primary_color};

  @media screen and (max-width: ${MOBILE}px) {
    font-size: ${MOBILE_FONT_SIZE}rem;
    margin: 1rem auto;
  }
`;
