import styled from 'styled-components';

import { Col } from '@/styles/globalStyles';

export const Options = styled(Col)`
  height: 100%;
  overflow: hidden;
  cursor: auto;
  flex-shrink: 0;
`;

export const Item = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  cursor: pointer;
  box-sizing: border-box;
  flex-shrink: 0;

  transition: all 0.2s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ theme }) => theme.border_color};
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.border_color};
  }

  &:last-child {
    border-radius: 0 0 0.6rem 0.6rem;
  }
  &:first-child {
    border-radius: 0.6rem 0.6rem 0 0;
  }
`;

export const Text = styled.div`
  flex-shrink: 0;
`;
