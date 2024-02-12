import { Container } from './ShadowBox.style';
import { ShadowBoxProps } from './ShadowBox.type';
/**
 * @param width px단위
 * @param height px단위
 * @param isActive 해당 파라미터 값을 true로 설정했을 때 배경 색을'#48DA79'으로 변경합니다. 주로 해당 컴포넌트가 선택된 상태일 때 사용합니다.
 * @param isHoverActive hover효과(scale)를 주고 싶을 때 사용합니다.
 */
const ShadowBox = ({
  width = 200,
  height = 200,
  isActive = false,
  isHoverActive = false,
  children,
}: ShadowBoxProps) => {
  return (
    <>
      <Container
        $width={width}
        $height={height}
        $color={isActive ? '#48DA79' : 'white'}
        $scale={isHoverActive ? 1.05 : 1.0}
      >
        {children}
      </Container>
    </>
  );
};

export default ShadowBox;
