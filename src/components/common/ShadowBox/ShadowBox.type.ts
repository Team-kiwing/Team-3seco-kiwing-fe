import { ReactNode } from 'react';

export interface ShadowBoxProps {
  width?: number;
  height?: number;
  isActive?: boolean;
  isHoverActive?: boolean;
  children?: ReactNode;
}
