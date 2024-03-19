import styled from 'styled-components';

import {
  FONT_REGULAR,
  MOBILE,
  MOBILE_FONT_SIZE,
  WEB_FONT_SIZE,
} from '@/constants';
import { Col } from '@/styles/globalStyles';

export const ModalContainer = styled(Col)`
  padding: 1rem;
  gap: 3rem;
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
