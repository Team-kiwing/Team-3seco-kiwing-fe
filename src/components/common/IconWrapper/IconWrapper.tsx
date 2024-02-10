import styled from 'styled-components';

const IconWrapper = styled.div<{
  $shape?: 'square' | 'circle'; // 아이콘 형태, 없을 시 square default
  $backgroundColor?: string; // 배경 색상
  $size?: 'xss' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | string;
  $fillColor?: string; // 아이콘 색상
  $hoverIconColor?: string; // hover시 아이콘 색상
  $hoverBackgroundColor?: string; // hover시 배경 아이콘 색상, 없을 시 동작X
}>`
  cursor: pointer;
  width: 20px;
  height: 24px;
  svg {
    width: 20px;
    height: 24px;
    fill: red;
  }
  :hover {
    fill: blue;
  }
`;

export default IconWrapper;
