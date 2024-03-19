import styled from 'styled-components';

import {
  BORDER_MOBILE,
  BORDER_WEB,
  FONT_SEMI_BOLD,
  MOBILE,
  MOBILE_FONT_SIZE,
  MODAL_BACKGROUND,
  MODAL_LAYOUT,
} from '@/constants';

export const ModalDimmer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(1.2px);
  z-index: ${MODAL_BACKGROUND};
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  max-height: 600px;
  min-width: 270px;
  min-height: 150px;

  position: relative;

  color: ${(props) => props.theme.primary_color};
  background-color: ${(props) => props.theme.background_color};
  border-radius: ${BORDER_WEB}rem;
  z-index: ${MODAL_LAYOUT};

  @media screen and (max-width: ${MOBILE}px) {
    max-width: 90%;
    max-height: 60%;
    border-radius: ${BORDER_MOBILE}rem;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem 5rem;

  font-weight: bold;
  font-size: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.border_color};

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.8rem;
  }
`;

export const ModalContents = styled.div`
  font-size: 1.6rem;
  padding: 1rem;
  overflow-y: scroll;
  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.4rem;
  }
`;

export const MobileModalCloseArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  width: 100%;
  height: 2rem;

  font-size: ${MOBILE_FONT_SIZE}rem;
  border-top: 1px solid ${(props) => props.theme.border_color};
  cursor: pointer;
  font-weight: ${FONT_SEMI_BOLD};

  &:active {
    background-color: ${(props) => props.theme.gray_200};
    border-bottom-left-radius: ${BORDER_WEB}rem;
    border-bottom-right-radius: ${BORDER_WEB}rem;
  }

  @media screen and (max-width: ${MOBILE}px) {
    border-bottom-left-radius: ${BORDER_WEB}rem;
    border-bottom-right-radius: ${BORDER_WEB}rem;
  }
`;
