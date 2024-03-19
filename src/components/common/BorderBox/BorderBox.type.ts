import { HTMLAttributes } from 'react';

export interface BorderBoxProps extends HTMLAttributes<HTMLDivElement> {
  width: string;
  height: string;
  isActive?: boolean;
  isHoverActive?: boolean;
  isScaleActive?: boolean;
  isCard?: boolean;
}

export interface ContainerProps {
  $width: string;
  $height: string;
  $color: string;
  $isActive: boolean;
  $isHoverActive: boolean;
  $isScaleActive: boolean;
  $isDarkMode: boolean;
  $isCard: boolean;
}
