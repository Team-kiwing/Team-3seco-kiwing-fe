import { HTMLAttributes } from 'react';

export interface ShadowBoxProps extends HTMLAttributes<HTMLDivElement> {
  width: number;
  height: number;
  isActive?: boolean;
  isHoverActive?: boolean;
}

export interface ContainerProps {
  $width: number;
  $height: number;
  $color: string;
  $isHoverActive: boolean;
}
