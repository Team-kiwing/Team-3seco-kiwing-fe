import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        &::-webkit-scrollbar {
          width: 0.4rem;
        }
        &::-webkit-scrollbar-thumb {
          background-color: hsla(0, 0%, 42%, 0.29);
          border-radius: 100px;
        }
    }

    html,
    body {
      font-family: 'Spoqa Han Sans Neo', -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      height: 100%;
      /* height: 100%;
      box-sizing: border-box;
      touch-action: manipulation;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      overscroll-behavior-x: none; */
    }
`;
