import styled, { css } from 'styled-components';

const IconWrapper = styled.div<{
  /**
   * @summary 사용될 아이콘의 사이즈를 결정합니다.
   * @description 기본 default 사이즈가 존재하고 number형태의 임의 사이즈도 추가할 수 있습니다.
   * @param 'xss' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | number
   */
  $size: 'xss' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | number;
  /**
   * @summary 기본으로 표기할 아이콘의 색상을 입력합니다.
   */
  $fillColor: string; // 아이콘 색상
  /**
   * @summary hover시 표기할 아이콘의 색상을 입력합니다.
   */
  $hoverIconColor: string; // hover시 아이콘 색상
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $size }) => {
    if (typeof $size === 'number') {
      return css`
        width: ${$size}px;
        height: ${$size}px;
      `;
    } else {
      switch ($size) {
        case 'xss':
          return css`
            width: 10px;
            height: 10px;
          `;
        case 'xs':
          return css`
            width: 20px;
            height: 20px;
          `;
        case 's':
          return css`
            width: 30px;
            height: 30px;
          `;
        case 'm':
          return css`
            width: 40px;
            height: 40px;
          `;
        case 'l':
          return css`
            width: 50px;
            height: 50px;
          `;
        case 'xl':
          return css`
            width: 60px;
            height: 60px;
          `;
        case 'xxl':
          return css`
            width: 70px;
            height: 70px;
          `;
        default:
          return css`
            width: 40px;
            height: 40px;
          `;
      }
    }
  }}
  svg {
    cursor: pointer;
    width: 100%;
    height: 100%;
    fill: ${(props) => props.$fillColor};
  }
  :hover {
    fill: ${(props) => props.$hoverIconColor};
  }
`;

export default IconWrapper;
