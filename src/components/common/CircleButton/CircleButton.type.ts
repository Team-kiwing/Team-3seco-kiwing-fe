import { ButtonHTMLAttributes } from 'react';

export interface CircleButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string;
  isBackgroundWhite?: boolean;
}

export interface StyledCircleButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  $size?: string;
  $isBackgroundWhite?: boolean;
}
