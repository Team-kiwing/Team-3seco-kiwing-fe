import styled from 'styled-components';

import {
  FONT_SEMI_BOLD,
  MOBILE,
  MOBILE_FONT_SIZE,
  MODAL_BACKGROUND,
  MODAL_LAYOUT,
} from '@/constants';

export const ModalDimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1.2px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${MODAL_BACKGROUND};
`;

export const ModalBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  max-height: 600px;
  min-width: 270px;
  min-height: 100px;
  background-color: #ffffff;
  border-radius: 10px;
  z-index: ${MODAL_LAYOUT};

  @media screen and (max-width: ${MOBILE}px) {
    max-width: 90%;
    max-height: 60%;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  padding: 1rem 5rem;
  font-weight: bold;
  font-size: 2rem;
  border-bottom: 1px solid #cbcbcb;
`;

export const ModalContents = styled.div`
  font-size: 1.6rem;
  padding: 1rem;
  overflow-y: scroll;
`;

export const MobileModalCloseArea = styled.div`
  display: flex;
  padding: 0.5rem 0;
  width: 100%;
  height: 2rem;
  font-size: ${MOBILE_FONT_SIZE}rem;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${(props) => props.theme.gray_200};
  cursor: pointer;
  font-weight: ${FONT_SEMI_BOLD};
`;
