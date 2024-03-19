import styled from 'styled-components';

import { BORDER_WEB } from '@/constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
`;

export const IconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const TooltipContainer = styled.div`
  #my-question-toggle-tooltip {
    border-radius: ${BORDER_WEB}rem;
  }
`;
