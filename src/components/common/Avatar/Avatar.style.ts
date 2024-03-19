import styled from 'styled-components';

import { DEFAULT_PROFILE_IMAGE } from './Avatar.const';
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
  width: ${({ $size }) =>
    typeof $size === 'number' ? `${$size}rem` : AvaterSize[$size]};
  height: ${({ $size }) =>
    typeof $size === 'number' ? `${$size}rem` : AvaterSize[$size]};
  border: 0.1rem solid ${({ theme }) => theme.gray_100};
  border-radius: 50%;
  background-image: ${({ $src }) =>
    $src ? `url(${$src})` : `url(${DEFAULT_PROFILE_IMAGE})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
