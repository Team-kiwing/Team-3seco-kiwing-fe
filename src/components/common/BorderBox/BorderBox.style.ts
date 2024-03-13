import styled, { css } from 'styled-components';

import {
  BORDER_CARD_MOBILE,
  BORDER_CARD_WEB,
  BORDER_MOBILE,
  BORDER_WEB,
  MOBILE,
  MOBILE_FONT_SIZE,
  WEB_FONT_SIZE,
} from '@/constants';

import { ContainerProps } from './BorderBox.type';

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$color};

  border: 0.15rem solid
    ${(props) =>
      props.$isActive ? props.theme.symbol_color : props.theme.border_color};
  border-radius: ${(props) =>
    props.$isCard ? `${BORDER_CARD_WEB}rem` : `${BORDER_WEB}rem`};
  transition: all 0.2s ease;
  color: ${(props) =>
    props.$isActive
      ? props.theme.primary_white_text_color
      : props.theme.primary_color};
  font-size: ${WEB_FONT_SIZE}rem;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      scale: ${(props) => (props.$isScaleActive ? 1.01 : undefined)};
      ${(props) => {
        if (props.$isHoverActive) {
          return css`
            border-color: ${props.theme.symbol_color};
          `;
        } else {
          return css`
            border-color: ${props.$isActive
              ? props.theme.symbol_color
              : props.theme.border_color};
          `;
        }
      }}
    }
  }

  @media screen and (max-width: ${MOBILE}px) {
    border-radius: ${(props) =>
      props.$isCard ? `${BORDER_CARD_MOBILE}rem` : `${BORDER_MOBILE}rem`};
    font-size: ${MOBILE_FONT_SIZE}rem;
  }
`;
