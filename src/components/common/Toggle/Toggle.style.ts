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
  padding: 2px;
  border-radius: 15px;
  background-color: #ccc;
  transition: background-color 0.2 ease-out;
  box-sizing: border-box;

  &:after {
    content: '';
    position: relative;
    left: 0;
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: white;
    transition: left 0.2s ease-out;
  }
`;

export const ToggleInput = styled.input`
  display: none;

  &:checked + div {
    background: lightgreen;
  }

  &:checked + div:after {
    left: calc(100% - 1rem);
  }

  &:disabled + div {
    opacity: 0.7;
    cursor: not-allowed;

    &:after {
      opacity: 0.7;
    }
  }
`;
