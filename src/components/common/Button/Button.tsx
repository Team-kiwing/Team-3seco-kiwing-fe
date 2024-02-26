import { useTheme } from 'styled-components';

import StyledButton from './Button.style';
import { ButtonProps } from './Button.type';

/**
 * @brief 범용적으로 사용할 수 있는 사각형 버튼입니다.
 * @param width px,rem,% 등 자유롭게 단위 커스텀 가능합니다.
 * @param height px,rem,% 등 자유롭게 단위 커스텀 가능합니다.
 * @detail 버튼의 비활성화/활성화 기능을 사용하시려면 isActive, disabled 속성을 둘 다 사용해야 합니다.
 * @param disabled 버튼이 비활성화되는 조건이 될 boolean 값을 넣습니다.
 * @param isActive disabled과 반대되는 boolean 값을 넣습니다.
 * @summary 사용법)
    const [isActive, setIsActive] = useState(false);
    <Button
      disabled={!isActive}
      isActive={isActive}
    >
      로그인
    </Button>
 * @param textSize 모바일 환경에서는 설정한 값에서 0.3rem을 뺀 크기로 자동 보정됩니다.
 */
const Button = ({
  width = '12rem',
  height = '3.5rem',
  backgroundColor,
  text,
  textColor,
  textSize = '1.6rem',
  hoverBackgroundColor,
  hoverTextColor,
  borderColor,
  borderRadius = '0.6rem',
  isActive = true,
  ...props
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <StyledButton
      $width={width}
      $height={height}
      $backgroundColor={backgroundColor || theme.symbol_color}
      $textColor={textColor || theme.primary_white_text_color}
      $textSize={textSize}
      $hoverBackgroundColor={
        hoverBackgroundColor || theme.symbol_secondary_color
      }
      $hoverTextColor={hoverTextColor || theme.primary_white_text_color}
      $borderColor={borderColor || 'transparent'}
      $borderRadius={borderRadius}
      $isActive={isActive}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
