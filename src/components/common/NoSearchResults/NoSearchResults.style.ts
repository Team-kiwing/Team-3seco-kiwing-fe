import styled from 'styled-components';

import {
  FONT_BOLD,
  FONT_SEMI_BOLD,
  MOBILE,
  MOBILE_FONT_SIZE,
  WEB_FONT_SIZE,
} from '@/constants';
import { Col } from '@/styles/globalStyles';

export const NotSearchWrapper = styled(Col)`
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${MOBILE}px) {
    gap: 1rem;
  }
`;

export const Text1 = styled.div`
  font-weight: ${FONT_BOLD};
  font-size: 5rem;
  rotate: calc(-20deg);
  color: ${({ theme }) => theme.primary_color};

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 2rem;
  }
`;

export const Text2 = styled.div`
  font-weight: ${FONT_SEMI_BOLD};
  font-size: ${MOBILE_FONT_SIZE}rem;
  color: ${({ theme }) => theme.primary_color};

  @media screen and (max-width: ${MOBILE}px) {
    font-size: ${WEB_FONT_SIZE}rem;
  }
`;

export const NoSearchResultsImages = styled.img`
  width: 25rem;

  @media screen and (max-width: ${MOBILE}px) {
    width: 15rem;
  }
`;
