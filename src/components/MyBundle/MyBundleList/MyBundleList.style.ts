import styled from 'styled-components';

import { FONT_MEDIUM, MOBILE } from '@/constants';

//MyBundleList
export const Container = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  overflow-x: hidden;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  @media screen and (max-width: ${MOBILE}px) {
    width: 100%;
    height: 100%;
    padding-left: 0;
    padding-right: 0;

    overflow-y: auto;
  }
`;

export const BundleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  overflow-x: hidden;
  overflow-y: auto;

  @media screen and (max-width: ${MOBILE}px) {
    margin-bottom: 6rem;
    gap: 1rem;
    height: calc(100% - 5rem);
    overflow-y: visible;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  font-weight: ${FONT_MEDIUM};
  padding-right: 0.4rem;
  box-sizing: border-box;

  background-color: ${({ theme }) => theme.background_color};

  @media screen and (max-width: ${MOBILE}px) {
    height: 8rem;
    position: fixed;
    padding-left: 1rem;
    padding-right: 1rem;

    bottom: 4rem;
    width: 100%;
  }
`;
