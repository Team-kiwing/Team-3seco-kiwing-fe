import { styled } from 'styled-components';

import { BORDER_WEB } from '@/constants';
import { Col, Row } from '@/styles/globalStyles';

export const ModalContainer = styled(Col)`
  padding: 1rem;
  gap: 3rem;
`;

export const ButtonContainer = styled(Row)`
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Text = styled.span`
  color: ${({ theme }) => theme.gray_300};
`;

export const TagFilterContainer = styled(Col)`
  gap: 1rem;
`;

export const TooltipContainer = styled.div`
  #my-question-modal-toggle-tooltip {
    border-radius: ${BORDER_WEB}rem;
  }
`;
