import styled from 'styled-components';

import { MOBILE } from '@/constants';

import { SearchBarStyleProps } from './SearchBar.type';

export const SearchBarWrapper = styled.div<SearchBarStyleProps>`
  @media screen and (max-width: ${MOBILE}px) {
    width: 80%;
    margin: 0 auto;
    min-width: 224px;
  }

  position: relative;
  width: ${(props) => (props.$width ? props.$width : '432px')};

  & > :nth-child(2) {
    position: absolute;
    top: -0.8rem;
    right: 0;
    color: ${({ theme }) => theme.primary_color};
  }
`;
