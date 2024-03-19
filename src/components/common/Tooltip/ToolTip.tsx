import styled, { css } from 'styled-components';

const TooltipWrapper = styled.div<{
  $direction: 'left' | 'right' | 'bottom' | 'top';
  $clicked?: boolean;
  $tooltip: string;
  $options: 'focus' | 'hover' | 'all';
  key?: string;
  $x?: number;
  $y?: number;
  $size?: number;
}>`
  z-index: 2;

  &:before,
  &:after {
    ${({ $clicked }) => {
      if ($clicked) {
        return css`
          visibility: visible;
          opacity: 1;
        `;
      } else {
        return css`
          visibility: hidden;
          opacity: 0;
        `;
      }
    }}
    position: absolute;
    ${({ $direction }) => {
      if ($direction !== 'left') {
        return css`
          left: 50%;
          transform: translateX(-50%);
        `;
      }
    }}
    white-space: nowrap;
    ${(props) => {
      if (props.$tooltip) {
        return css`
          transition: all 0.2s ease;
        `;
      }
    }}
    font-size: "${(props) => (props.$size ? props.$size : 1)}rem";
  }

  &:before {
    color: ${(props) => props.theme.text_primary_color};
    content: '${(props) => `${props.$tooltip}`}';
    height: auto;
    position: absolute;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: '${(props) => (props.$size ? props.$size : 1)}rem';
    font-weight: 550;
    white-space: pre;
    background: ${(props) => props.theme.symbol_color};
  }

  &:after {
    content: '';
  }

  ${({ $direction }) => {
    switch ($direction) {
      case 'top':
        return css`
          &:before {
            bottom: calc(100% + 14px);
          }
          &:after {
            border-left: 10px solid transparent;
            bottom: calc(100% + 4px);
            border-right: 10px solid transparent;
            border-top: 10px solid ${(props) => props.theme.symbol_color};
          }
        `;
      case 'right':
        return css`
          &:before {
            top: 50%;
            transform: translateY(-50%);
            left: calc(100% + 14px);
          }
          &:after {
            top: 50%;
            left: calc(100% + 4px);
            transform: translateY(-50%) rotate(180deg);
            border-top: 10px solid transparent;
            border-left: 10px solid ${(props) => props.theme.symbol_color};
            border-bottom: 10px solid transparent;
          }
        `;
      case 'bottom':
        return css`
          &:before {
            top: calc(100% + 14px);
          }
          &:after {
            border-left: 10px solid transparent;
            top: calc(100% + 4px);
            border-right: 10px solid transparent;
            border-bottom: 10px solid ${(props) => props.theme.symbol_color};
          }
        `;
      case 'left':
        return css`
          &:before {
            top: 50%;
            transform: translateY(-50%);
            right: calc(100% + 14px);
          }
          &:after {
            top: 50%;
            right: calc(100% + 4px);
            transform: translateY(-50%) rotate(180deg);
            border-top: 10px solid transparent;
            border-right: 10px solid ${(props) => props.theme.symbol_color};
            border-bottom: 10px solid transparent;
          }
        `;
      default:
        return null;
    }
  }}

  ${(props) => {
    switch (props.$options) {
      case 'all':
        switch (props.$tooltip) {
          case '':
            return css`
              &:hover:before,
              &:hover:after {
                visibility: visible;
                opacity: 1;
              }

              &:focus-within:before,
              &:focus-within:after {
                visibility: hidden;
                opacity: 0;
              }
            `;
          default:
            return css`
              &:hover:before,
              &:hover:after {
                visibility: visible;
                opacity: 1;
              }

              &:focus-within:before,
              &:focus-within:after {
                visibility: visible;
                opacity: 1;
              }
            `;
        }
      case 'focus':
        switch (props.$tooltip) {
          case '':
            return css`
              &:focus-within:before,
              &:focus-within:after {
                visibility: hidden;
                opacity: 0;
              }
            `;
          default:
            return css`
              &:focus-within:before,
              &:focus-within:after {
                visibility: visible;
                opacity: 1;
              }
            `;
        }
      case 'hover':
        return css`
          &:hover:before,
          &:hover:after {
            visibility: visible;
            opacity: 1;
          }
        `;
      default:
        return null;
    }
  }}
`;

export default TooltipWrapper;
