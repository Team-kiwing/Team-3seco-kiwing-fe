import styled from 'styled-components';

import { MOBILE } from '@/constants';

import { SearchBarStyleProps } from './SearchBar.type';

export const SearchBarWrapper = styled.div<SearchBarStyleProps>`
  @media screen and (max-width: ${MOBILE}px) {
    margin: 0 auto;
  }

  position: relative;
  width: 100%;
  max-width: ${(props) =>
    props.$maxWidth ? props.$maxWidth : `calc(${MOBILE}px * 0.8)`};
  min-width: 224px;

  & > :nth-child(2) {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    color: ${({ theme }) => theme.primary_color};
  }
`;
