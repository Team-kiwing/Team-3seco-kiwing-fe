import styled, { css } from 'styled-components';

import { MOBILE } from '@/constants';

import { ToggleContainerProps, ToggleSwitchProps } from './Toggle.type';

export const ToggleContainer = styled.label<ToggleContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

export const ToggleSwitch = styled.div<ToggleSwitchProps>`
  width: 100%;
  height: 100%;

  border: 0.2rem solid transparent;

  border-radius: ${({ $height }) => $height};
  background-color: ${(props) =>
    props.$isBackgroundGray
      ? props.theme.gray_300
      : props.theme.container_color};
  transition: all 0.2s ease;
  position: relative;
  color: ${(props) => props.theme.gray_600};

  &:after {
    content: '';
    position: relative;
    left: 0;
    top: 0;
    margin: calc(${({ $height }) => $height} * 0.1);
    display: block;
    width: calc(${({ $height }) => $height} * 0.8);
    height: calc(${({ $height }) => $height} * 0.8);
    border-radius: 50%;
    background-color: ${(props) =>
      props.$isColorReverse ? props.theme.symbol_color : 'white'};
    transition: all 0.2s ease;
  }

  &:before {
    ${({ $isContentShow }) => {
      if ($isContentShow) {
        return css`
          content: '비공개';
        `;
      }
    }};
    position: absolute;
    font-size: ${(props) => props.$fontSize};
    left: 40%;
    @media screen and (max-width: ${MOBILE}px) {
      font-size: max(calc(${(props) => props.$fontSize} - 0.2rem), 1rem);
      left: 45%;
    }
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s ease;
  }

  ${({ $on, $isColorReverse, theme, $height, $isContentShow, $fontSize }) => {
    if ($on) {
      return css`
        background: ${$isColorReverse ? 'white' : theme.symbol_color};
        &:after {
          background-color: ${$isColorReverse ? theme.symbol_color : 'white'};
          left: calc(100% - ${$height});
        }
        &:before {
          content: '${$isContentShow ? '공개' : ''}';
          position: absolute;
          font-size: ${$fontSize};
          left: 20%;
          @media screen and (max-width: ${MOBILE}px) {
            font-size: max(calc(${$fontSize} - 0.2rem), 1rem);
            left: 25%;
          }
          color: white;
          top: 50%;
          transition: all 0.2s ease;
        }
      `;
    } else {
      return css`
        opacity: 0.7;
      `;
    }
  }}
`;
