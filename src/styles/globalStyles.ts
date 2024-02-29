import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        &::-webkit-scrollbar {
          width: 0.4rem;
        }
        &::-webkit-scrollbar-thumb {
          background-color: ${(props) => props.theme.border_color};
          border-radius: 100px;
        }
    }   

    html,   
    body {
      background-color: ${(props) => props.theme.background_color};
      font-family: 'Spoqa Han Sans Neo', -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      height: 100%;
      font-size: 62.5%;
      box-sizing: border-box;
      
      input:not([type=color]):not([type=checkbox]):not([type=text]), button, textarea, select {
        border-radius: 0;
      }

      button, input[type=button], input[type=submit], input[type=reset] {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
      -webkit-tap-highlight-color: transparent;
    }

    button {
    cursor: pointer;
    background-color: Transparent;
    border: none;
    user-select: none;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
