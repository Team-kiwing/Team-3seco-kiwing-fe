import styled, { css } from 'styled-components';

const sizeMapping = {
  xss: '1rem',
  xs: '2rem',
  s: '3rem',
  m: '4rem',
  l: '5rem',
  xl: '6rem',
  xxl: '7rem',
};

const IconWrapper = styled.div<{
  /**
   * @summary 사용될 아이콘의 사이즈를 결정합니다.
   * @description 기본 default 사이즈가 존재하고 number 타입의 숫자를 입력 받아 임의의 rem 사이즈도 추가할 수 있습니다.
   * @param 'xss' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | number
   */
  $size: 'xss' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | number;
  /**
   * @summary 기본으로 표기할 아이콘의 색상을 입력합니다.
   */
  $fillColor?: string;
  /**
   * @summary hover시 표기할 아이콘의 색상을 입력합니다.
   */
  $hoverIconColor?: string;
  /**
   * @summary hover시 backgroundColor여부를 선택적으로 입력받습니다.
   */
  $isBackground?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  -webkit-tap-highlight-color: transparent;

  ${({ $size }) => {
    if (typeof $size === 'number') {
      return css`
        width: ${$size}rem;
        height: ${$size}rem;
      `;
    } else {
      const sizeValue = sizeMapping[$size] || '40px';
      return css`
        width: ${sizeValue};
        height: ${sizeValue};
      `;
    }
  }}

  svg {
    box-sizing: border-box;
    ${({ $isBackground }) => {
      if ($isBackground) {
        return css`
          width: 65%;
          height: 65%;
        `;
      } else {
        return css`
          width: 100%;
          height: 100%;
        `;
      }
    }}
    fill: ${(props) => props.$fillColor};
  }

  @media (hover: hover) and (pointer: fine) {
    /* when supported */
    &:hover {
      svg {
        fill: ${(props) => props.$hoverIconColor};
      }
      ${({ $isBackground }) => {
        if ($isBackground) {
          return css`
            background-color: rgba(128, 128, 128, 0.15);
          `;
        }
      }}
    }
  }
`;

export default IconWrapper;
