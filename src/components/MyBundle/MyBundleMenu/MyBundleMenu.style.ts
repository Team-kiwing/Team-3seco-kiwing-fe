import styled from 'styled-components';

export const Options = styled.div`
  height: 100%;

  overflow: auto;
  display: flex;
  flex-direction: column;
  cursor: auto;
`;

export const Item = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 1rem 2rem;
  cursor: pointer;
  box-sizing: border-box;

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
