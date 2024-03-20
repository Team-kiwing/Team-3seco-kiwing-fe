import styled from 'styled-components';

import { MOBILE_FONT_SIZE, WEB_FONT_SIZE } from '@/constants';
import { FONT_MEDIUM, MOBILE, MOBILE_MIN } from '@/constants';

export const SharedBundleCardWrapper = styled.div`
  width: 100%;
  min-width: 28rem;
`;

export const BundleTitle = styled.section`
  font-size: 2rem;
  padding: 2rem;
  font-weight: ${FONT_MEDIUM - 50};
  width: 70%;
  text-align: center;
  color: ${({ theme }) => theme.primary_white_text_color};
  word-break: break-all;

  @media screen and (max-width: ${MOBILE}px) {
    font-size: ${WEB_FONT_SIZE}rem;
    padding: 1.5rem;
  }

  @media screen and (max-width: ${MOBILE_MIN}px) {
    font-size: ${MOBILE_FONT_SIZE}rem;
    padding: 1rem;
  }
`;

export const ClickContent = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  margin: 0 2rem;
  gap: 2rem;
  @media screen and (max-width: ${MOBILE}px) {
    margin: 0 0.5rem;
    gap: 0;
  }
`;
