import styled from 'styled-components';

import {
  FONT_BOLD,
  FONT_MEDIUM,
  MOBILE,
  MOBILE_FONT_SIZE,
  WEB_FONT_SIZE,
} from '@/constants';
import { Col } from '@/styles/globalStyles';

export const ReportPageLayout = styled(Col)`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  align-items: center;
  padding: 3rem 0;

  color: ${({ theme }) => theme.primary_color};

  @media screen and (max-width: ${MOBILE}px) {
    width: 90%;
    height: auto;
    padding: 2rem 0;
  }
`;

export const ReportGuideContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ReportPageTitle = styled.h2`
  font-size: 3rem;
  margin-top: 0;

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
  word-break: break-all;

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
