import styled from 'styled-components';

import { FONT_MEDIUM, MOBILE } from '@/constants';

//MyBundleList
export const Container = styled.section`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  min-width: 20%;

  @media screen and (max-width: ${MOBILE}px) {
    min-height: 100%;
    width: 100%;
    height: auto;
  }
`;

export const BundleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem;

  padding: 2rem;
  padding-top: 1.5rem;
  padding-bottom: 0rem;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;

  word-break: break-all;

  @media screen and (max-width: ${MOBILE}px) {
    padding: 0;
    padding-top: 2rem;
    min-height: calc(100vh - 23rem);
    margin-bottom: calc(6.5rem + env(safe-area-inset-bottom));
    gap: 1rem;
    overflow-y: visible;
  }
`;

export const BundleInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BundleItemWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  width: 100%;
  font-weight: ${FONT_MEDIUM};

  box-sizing: border-box;

  background-color: ${({ theme }) => theme.background_color};

  @media screen and (max-width: ${MOBILE}px) {
    height: calc(8rem + env(safe-area-inset-bottom));
    position: fixed;
    padding-left: 1rem;
    padding-right: 1rem;

    bottom: 4rem;
  }
`;
