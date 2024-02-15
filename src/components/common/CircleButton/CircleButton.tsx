import { Circle, ContainerCircle } from './CircleButton.style';
import { CircleButtonProps } from './CircleButton.type';

/**
 * @brief 질문 및 꾸러미 추가 동작을 수행하는 원형 버튼입니다.
 * @param size px,rem,% 등 자유롭게 단위 커스텀 가능합니다.
 * @param isBackgroundWhite 버튼 테두리 베이스를 white로 설정할 수 있는 boolean 속성입니다.
 * 버튼이 올라갈 컴포넌트의 배경 색이 심볼 색과 같은 경우, 해당 속성을 true로 설정합니다.
 */
const CircleButton = ({
  size = '5rem',
  isBackgroundWhite = false,
  ...props
}: CircleButtonProps) => {
  return (
    <ContainerCircle
      $size={size}
      $isBackgroundWhite={isBackgroundWhite}
      {...props}
    >
      <Circle $size={size}>
        <span>+</span>
      </Circle>
    </ContainerCircle>
  );
};

export default CircleButton;
