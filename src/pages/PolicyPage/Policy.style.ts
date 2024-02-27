import styled from 'styled-components';

import {
  FONT_REGULAR,
  FONT_SEMI_BOLD,
  MOBILE,
  MOBILE_FONT_SIZE,
  WEB_FONT_SIZE,
} from '@/constants';
import { Col } from '@/styles/globalStyles';

export const PolicyPageWrapper = styled(Col)`
  width: 70%;
  margin: 0 auto;
  gap: 3rem;
  padding: 7.5rem 0;

  @media screen and (max-width: ${MOBILE}px) {
    gap: 2rem;
  }
`;

export const PolicyTitle = styled.div`
  color: ${({ theme }) => theme.primary_color};
  font-size: ${WEB_FONT_SIZE + 1}rem;
  font-weight: ${FONT_SEMI_BOLD};
`;

export const PolicyContent = styled.div`
  color: ${({ theme }) => theme.primary_color};
  font-size: ${WEB_FONT_SIZE}rem;
  font-weight: ${FONT_REGULAR};
  white-space: pre-wrap;
  line-height: 2.5rem;

  @media screen and (max-width: ${MOBILE}px) {
    font-size: ${MOBILE_FONT_SIZE}rem;
    line-height: 2rem;
  }
`;
