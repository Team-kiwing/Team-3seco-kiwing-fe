import { PropsWithChildren } from 'react';
import { useTheme } from 'styled-components';

import StyledButton from './Button.style';
import { ButtonProps } from './Button.type';

const Button = ({
  width = '10rem',
  height = '3rem',
  backgroundColor,
  textColor,
  textSize = '1.3rem',
  hoverBackgroundColor,
  hoverTextColor,
  borderColor,
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const theme = useTheme();

  return (
    <StyledButton
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor || theme.symbol_color}
      $textColor={textColor || theme.background_color}
      $textSize={textSize}
      $hoverBackgroundColor={
        hoverBackgroundColor || theme.symbol_secondary_color
      }
      $hoverTextColor={hoverTextColor || theme.secondary_color}
      $borderColor={borderColor || undefined}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
