import { ToggleContainer, ToggleSwitch } from './Toggle.style';
import { ToggleProps } from './Toggle.type';

/**
 * @summary Toggle 버튼
 * @param on Toggle on/off boolean값
 * @param onChange Toggle on/off값을 제어하는 함수
 * @param isColorReverse Toggle 전체 색상 반전을 결정하는 boolean 값
 * @param isContentShow 공개/비공개 Text 출력 여부
 */
const Toggle = ({
  width = '3rem',
  height = '1.5rem',
  on,
  onChange,
  isColorReverse = false,
  isContentShow = false,
  ...props
}: ToggleProps) => {
  const handleChange = () => {
    onChange && onChange();
  };

  return (
    <ToggleContainer
      {...props}
      $width={width}
      $height={height}
      onClick={handleChange}
    >
      <ToggleSwitch
        $width={width}
        $height={height}
        $on={on}
        $isColorReverse={isColorReverse}
        $isContentShow={isContentShow}
      />
    </ToggleContainer>
  );
};

export default Toggle;
