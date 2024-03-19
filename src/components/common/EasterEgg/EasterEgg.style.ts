import styled, { css, keyframes } from 'styled-components';

import { EasterEggStyleProps } from './EasterEgg.type';

export const RainyEffect = keyframes`
    from { opacity: 0; }
    50% { opacity: 1; }
    to { transform: translateY(350px); }
`;

export const EasterEggContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;

  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 3;
`;

export const EasterEggPiece = styled.div`
  position: absolute;
  width: 10px;
  height: 30px;
  background: #ffd300;
  top: 0;
  opacity: 0;

  &:nth-child(odd) {
    background: #7431e8;
  }

  &:nth-child(even) {
    z-index: 1;
  }

  &:nth-child(4n) {
    width: 5px;
    height: 12px;
    animation-duration: 2000ms;
  }

  &:nth-child(3n) {
    width: 3px;
    height: 10px;
    animation-duration: 2500ms;
    animation-delay: 1000ms;
  }

  &:nth-child(4n-7) {
    background: red;
  }
`;

export const AnimatedEasterEggPiece = styled(
  EasterEggPiece
)<EasterEggStyleProps>`
  ${({ $left, $rotate, $delay, $duration }) => css`
    left: ${$left};
    transform: rotate(${$rotate});
    animation: ${RainyEffect} ${$duration}ms infinite ease-out;
    animation-delay: ${$delay}ms;
  `}
`;
