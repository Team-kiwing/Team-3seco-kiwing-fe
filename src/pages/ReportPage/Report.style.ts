import styled from 'styled-components';

import { FONT_BOLD, FONT_MEDIUM, WEB_FONT_SIZE } from '@/constants';

export const ReportPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ReportGuideContainer = styled.div``;

export const ReportPageTitle = styled.h2`
  font-size: 3rem;
`;

export const ReportGuideTitle = styled.span`
  font-size: 2rem;
  font-weight: ${FONT_BOLD};
`;

export const ReportGuideText = styled.p`
  font-size: ${WEB_FONT_SIZE}rem;
  font-weight: ${FONT_MEDIUM};
  line-height: normal;
`;

export const ReportForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
`;
