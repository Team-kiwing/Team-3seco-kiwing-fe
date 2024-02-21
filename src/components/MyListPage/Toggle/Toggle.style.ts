import styled from 'styled-components';

export const ToggleContainer = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const ToggleSwitch = styled.div`
  width: 3rem;
  height: 1.5rem;
  padding: 0.2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.gray_200}; //#ccc;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:after {
    content: '';
    position: relative;
    left: 0;
    top: 0;
    display: block;
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    background-color: white;
    transition: all 0.2s ease;
  }
`;

export const ToggleInput = styled.input`
  display: none;

  &:checked + div {
    background: ${({ theme }) => theme.symbol_color};
  }

  &:checked + div:after {
    left: calc(100% - 1.1rem);
  }

  &:disabled + div {
    opacity: 0.7;
    cursor: not-allowed;

    &:after {
      opacity: 0.7;
    }
  }
`;
