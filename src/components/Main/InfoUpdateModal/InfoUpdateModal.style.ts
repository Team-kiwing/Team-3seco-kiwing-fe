import { styled } from 'styled-components';

import { MOBILE } from '@/constants';
import { Col, Row } from '@/styles/globalStyles';

export const ModalContainer = styled(Col)`
  padding: 3rem;
  gap: 3rem;

  @media screen and (max-width: ${MOBILE}px) {
    padding: 2rem;
  }
`;

export const ButtonContainer = styled(Row)`
  justify-content: center;
  align-items: center;
`;

export const ImageUploadButtonBox = styled.div`
  position: absolute;
  right: -1rem;

  @media screen and (max-width: ${MOBILE}px) {
    right: -0.5rem;
  }
`;
