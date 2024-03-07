import { css, styled } from 'styled-components';

import { MOBILE } from '@/constants';

export const Container = styled.article`
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  width: 100%;
  height: 95%;
  box-sizing: border-box;
  overflow-x: hidden;

  @media screen and (max-width: ${MOBILE}px) {
    height: auto;
  }
`;
export const StyledWrapper = styled.section<{ $isSelected: boolean }>`
  width: 20rem;
  min-width: 16rem;
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
