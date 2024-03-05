import styled from 'styled-components';

import {
  FONT_BOLD,
  FONT_MEDIUM,
  MOBILE,
  MOBILE_FONT_SIZE,
  WEB_FONT_SIZE,
} from '@/constants';
import { Col } from '@/styles/globalStyles';

export const ReportPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  height: 100%;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.primary_color};

  @media screen and (max-width: ${MOBILE}px) {
    width: 90%;
    height: auto;
    padding-bottom: 1rem;
  }
`;

export const ReportGuideContainer = styled(Col)`
  width: 100%;
`;

export const ReportPageTitle = styled.h2`
  font-size: 3rem;

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 2rem;
  }
`;

export const ReportGuideTitle = styled.span`
  font-size: 2rem;
  font-weight: ${FONT_BOLD};

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.5rem;
  }
`;

export const ReportGuideText = styled.p`
  font-size: ${WEB_FONT_SIZE}rem;
  font-weight: ${FONT_MEDIUM};
  line-height: normal;
  word-break: keep-all;

  @media screen and (max-width: ${MOBILE}px) {
    word-break: break-all;
    font-size: ${MOBILE_FONT_SIZE}rem;
  }
`;

export const ReportForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
`;
