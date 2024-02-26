import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { useTheme } from 'styled-components';

import { themeStore } from '@/stores';

import { Container } from './ShadowBox.style';
import { ShadowBoxProps } from './ShadowBox.type';
/**
 * @param width px,rem,% 등 단위 커스텀 가능
 * @param height px,rem,% 등 단위 커스텀 가능
 * @param isActive 해당 파라미터 값을 true로 설정했을 때 배경 색을'#48DA79'으로 변경합니다. 주로 해당 컴포넌트가 선택된 상태일 때 사용합니다.
 * @param isHoverActive hover효과(scale)를 주고 싶을 때 사용합니다.
 * @param isCard Card로 사용되는 경우 border-radius 1.5rem이 적용됩니다.
 */
const ShadowBox = forwardRef(
  (
    {
      width,
      height,
      isActive = false,
      isHoverActive = false,
      isCard = false,
      children,
      ...props
    }: PropsWithChildren<ShadowBoxProps>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const theme = useTheme();
    const { isDarkMode } = themeStore();

    return (
      <>
        <Container
          ref={ref}
          $width={width}
          $height={height}
          $color={isActive ? theme.symbol_color : theme.background_color}
          $isHoverActive={isHoverActive}
          $isActive={isActive}
          $isDarkMode={isDarkMode}
          $isCard={isCard}
          {...props}
        >
          {children}
        </Container>
      </>
    );
  }
);

export default ShadowBox;
