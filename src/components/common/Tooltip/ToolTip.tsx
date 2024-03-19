import styled, { css } from 'styled-components';

import { FONT_MEDIUM } from '@/constants';

/**
* @summary 사용법 
      <div style={{ position: 'relative' }}>
        <Tooltip
          $direction="bottom"
          $options="hover"
          $tooltip="툴팁"
          $size={1.6}
          $isArrow={false}
          $textColor="black"
        >
        {툴팁으로 감싸는 컴포넌트}
        </Tooltip>
      </div>
* @description 툴팁 컴포넌트입니다. 필수 3개 속성이 존재합니다.
 * @param $direction: 'left' | 'right' | 'bottom' | 'top';
 * @param $tooltip: string; // 툴팁 텍스트 내용을 추가합니다.
 * @param $options: 'focus' | 'hover' | 'all';
 * @param $size?: number; //툴팁 텍스트 사이즈를 정합니다.
 * @param $clicked?: boolean; // 계속 툴팁을 띄워주는지 여부를 정합니다.
 * @param $isArrow?: boolean; // 툴팁에 표시되는 화살표 여부를 결정합니다.
 * @param $BackgroundColor?: string; // 배경 색상을 정합니다.
 * @param $textColor?: string; // 글씨색상을
 * @returns
 */
const Tooltip = styled.div<{
  $direction: 'left' | 'right' | 'bottom' | 'top';
  $clicked?: boolean;
  $tooltip: string;
  $options: 'focus' | 'hover' | 'all';
  $size?: number;
  $isArrow?: boolean;
  $BackgroundColor?: string;
  $textColor?: string;
}>`
  z-index: 2;

  ${({ $isArrow }) => {
    if ($isArrow === false) {
      return css`
        &:after {
          display: none;
        }
      `;
    }
  }}

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
    ${({ $tooltip }) => {
      if ($tooltip) {
        return css`
          transition: all 0.2s ease;
        `;
      }
    }}
  }

  &:before {
    color: ${({ theme, $textColor }) =>
      $textColor !== undefined ? $textColor : theme.primary_color};
    content: '${({ $tooltip }) => `${$tooltip}`}';
    height: auto;
    position: absolute;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: ${({ $size }) => ($size ? `${$size}rem` : '1rem')};
    font-weight: ${FONT_MEDIUM};
    white-space: pre;
    background: ${({ theme, $BackgroundColor }) =>
      $BackgroundColor ? $BackgroundColor : theme.symbol_color};
  }

  &:after {
    content: '';
  }

  ${(props) => {
    switch (props.$direction) {
      case 'top':
        return css`
          &:before {
            bottom: calc(100% + 14px);
          }
          &:after {
            border-left: 10px solid transparent;
            bottom: calc(100% + 4px);
            border-right: 10px solid transparent;
            border-top: 10px solid
              ${({ theme }) =>
                props.$BackgroundColor
                  ? props.$BackgroundColor
                  : theme.symbol_color};
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
            border-left: 10px solid
              ${({ theme }) =>
                props.$BackgroundColor
                  ? props.$BackgroundColor
                  : theme.symbol_color};
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
            border-bottom: 10px solid
              ${({ theme }) =>
                props.$BackgroundColor
                  ? props.$BackgroundColor
                  : theme.symbol_color};
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
            border-right: 10px solid
              ${({ theme }) =>
                props.$BackgroundColor
                  ? props.$BackgroundColor
                  : theme.symbol_color};
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

export default Tooltip;
