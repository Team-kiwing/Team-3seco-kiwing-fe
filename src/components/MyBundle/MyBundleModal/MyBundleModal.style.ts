import { styled } from 'styled-components';

import { BORDER_WEB } from '@/constants';
import { Col } from '@/styles/globalStyles';

export const ModalContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
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
  #my-bundle-modal-toggle-tooltip {
    border-radius: ${BORDER_WEB}rem;
  }
`;
