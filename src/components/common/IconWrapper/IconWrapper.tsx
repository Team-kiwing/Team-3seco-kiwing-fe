import styled from 'styled-components';

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
  // $shape?: 'square' | 'circle'; // 아이콘 형태, 없을 시 square default
  // $backgroundColor?: string; // 배경 색상
  // $hoverBackgroundColor?: string; // hover시 배경 아이콘 색상, 없을 시 동작X
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;

  width: 20px;
  height: 20px;
  svg {
    cursor: pointer;
    width: 100%;
    height: 100%;
    fill: red;
  }
  :hover {
    fill: blue;
  }
`;

export default IconWrapper;
