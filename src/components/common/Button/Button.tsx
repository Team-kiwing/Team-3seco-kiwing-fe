import { PropsWithChildren } from 'react';
import { useTheme } from 'styled-components';

import StyledButton from './Button.style';
import { ButtonProps } from './Button.type';

/**
 * @brief 범용적으로 사용할 수 있는 사각형 버튼입니다.
 * @param width px,rem,% 단위 커스텀 가능
 * @param height px,rem,% 단위 커스텀 가능
 */
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
