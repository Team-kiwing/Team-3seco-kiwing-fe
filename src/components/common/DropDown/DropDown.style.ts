import styled from 'styled-components';

import { MOBILE } from '@/constants';

export const Wrapper = styled.div<{ $isShow: boolean }>`
  display: ${(props) => (props.$isShow ? 'flex' : 'none')};
`;

export const Background = styled.div`
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  width: 100%;
  height: 90%;
  overflow: auto;
`;
export const Item = styled.div`
  // height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  cursor: pointer;

  transition: all 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) => theme.gray_100};
    }
  }
`;

export const Title = styled.span`
  font-size: 1.4rem;

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.2rem;
  }
`;

export const Body = styled.span`
  font-size: 1rem;
  color: grey;
`;
