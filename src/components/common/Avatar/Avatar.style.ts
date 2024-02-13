import styled from 'styled-components';

import { AvatarProps } from './Avatar.type';

const AvaterSize: { [key: string]: string } = {
  mobile: '5rem',
  pc: '10rem',
  nav: '4rem',
};

export const AvatarWrapper = styled.div<AvatarProps>`
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: ${({ $size }) => AvaterSize[$size]};
  height: ${({ $size }) => AvaterSize[$size]};
  background-image: ${({ $src }) =>
    $src ? `url(${$src})` : 'url(src/assets/profile.png)'};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
`;
