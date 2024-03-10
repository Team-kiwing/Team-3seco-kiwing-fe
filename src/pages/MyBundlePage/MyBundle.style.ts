import { css, styled } from 'styled-components';

import { MOBILE } from '@/constants';

export const Container = styled.article`
  display: flex;
  gap: 2rem;
  padding: 4rem;
  padding-top: 2rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;

  @media screen and (max-width: ${MOBILE}px) {
    min-height: 100%;
    height: auto;
  }
`;
export const StyledWrapper = styled.section<{ $isSelected: boolean }>`
  padding-top: 1rem;
  box-sizing: border-box;
  width: 20rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition:
    transform 1s ease-in-out,
    opacity 1s ease-in-out,
    width 1s ease-in-out;

  ${({ $isSelected }) => {
    if (!$isSelected) {
      return css`
        display: fixed;
        transform: translateX(150%);
        opacity: 0;
        width: 0;
      `;
    }
  }}
`;
