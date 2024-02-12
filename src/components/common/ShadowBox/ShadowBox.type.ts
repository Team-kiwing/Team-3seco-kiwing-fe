import { HTMLAttributes, ReactNode } from 'react';

export interface ShadowBoxProps extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  isActive?: boolean;
  isHoverActive?: boolean;
  children?: ReactNode;
}
