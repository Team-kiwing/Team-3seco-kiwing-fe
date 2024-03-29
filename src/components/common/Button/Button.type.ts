import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  text: string;
  backgroundColor?: string;
  textColor?: string;
  textSize?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  borderColor?: string;
  borderRadius?: string;
  isActive?: boolean;
}

export interface StyledButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  $width: string;
  $height: string;
  $backgroundColor: string;
  $textColor: string;
  $textSize: string;
  $hoverBackgroundColor: string;
  $hoverTextColor: string;
  $borderColor?: string;
  $borderRadius: string;
  $isActive?: boolean;
}
