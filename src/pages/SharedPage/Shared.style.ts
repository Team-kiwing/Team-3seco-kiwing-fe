import styled from 'styled-components';

import { MOBILE } from '@/constants';

export const SharedWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 3rem;
  @media screen and (max-width: ${MOBILE}px) {
    width: 90%;
  }
`;

export const TagFilterWrapper = styled.div`
  width: 100%;
  margin: 5rem auto;
  display: flex;
  justify-content: center;
`;

export const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  gap: 2rem;
  justify-content: start;
  @media screen and (max-width: ${MOBILE}px) {
    flex-direction: column;
  }
`;

export const SelectorWrapper = styled.div`
  display: flex;
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
