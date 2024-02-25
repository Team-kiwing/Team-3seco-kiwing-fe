import { HTMLAttributes } from 'react';

export interface ShadowBoxProps extends HTMLAttributes<HTMLDivElement> {
  width: string;
  height: string;
  isActive?: boolean;
  isHoverActive?: boolean;
}

export interface ContainerProps {
  $width: string;
  $height: string;
  $color: string;
  $isHoverActive: boolean;
  $isDarkMode: boolean;
}
