import { css, styled } from 'styled-components';

import { MOBILE } from '@/constants';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  @media screen and (max-width: ${MOBILE}px) {
    height: auto;
    overflow-y: auto;
  }
`;

export const Container = styled.article`
  display: flex;
  gap: 1rem;

  padding-top: 1.5rem;
  padding-bottom: 2rem;
  width: 100%;
  padding-left: 2rem;
  max-width: 150rem;
  height: 100%;
  box-sizing: border-box;
  justify-content: center;
  overflow-x: hidden;

  @media screen and (max-width: ${MOBILE}px) {
    width: 100%;
    height: auto;
    padding: 0;
  }
`;

export const StyledWrapper = styled.section<{ $isSelected: boolean }>`
  padding: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 0;
  box-sizing: border-box;
  width: 20rem;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition:
    transform 0.8s ease-in-out,
    opacity 0.8s ease-in-out,
    width 0.8s ease-in-out;

  ${({ $isSelected }) => {
    if (!$isSelected) {
      return css`
        padding: 0rem;
        display: fixed;
        transform: translateX(150%);
        opacity: 0;
        width: 0;
      `;
    }
  }}
`;
