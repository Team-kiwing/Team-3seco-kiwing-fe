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
  width: ${({ $size }) => AvaterSize[$size]};
  height: ${({ $size }) => AvaterSize[$size]};
  border: 0.1rem solid #d9d9d9; /* TODO: #d9d9d9 => gray.100 으로 바꾸기 */
  border-radius: 50%;
  background-image: ${({ $src }) =>
    $src ? `url(${$src})` : `url(${DEFAULT_PROFILE_IMAGE})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
