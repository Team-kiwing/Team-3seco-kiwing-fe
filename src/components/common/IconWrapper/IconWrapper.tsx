import styled, { css } from 'styled-components';

const sizeMapping = {
  xss: '10px',
  xs: '20px',
  s: '30px',
  m: '40px',
  l: '50px',
  xl: '60px',
  xxl: '70px',
};

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
  $fillColor: string;
  /**
   * @summary hover시 표기할 아이콘의 색상을 입력합니다.
   */
  $hoverIconColor: string;
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
      const sizeValue = sizeMapping[$size] || '40px';
      return css`
        width: ${sizeValue};
        height: ${sizeValue};
      `;
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
