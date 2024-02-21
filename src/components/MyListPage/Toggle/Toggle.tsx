import useToggle from './Toggle.hook';
import { ToggleContainer, ToggleInput, ToggleSwitch } from './Toggle.style';
import { ToggleProps } from './Toggle.type';

const Toggle = ({
  name,
  on = false,
  disabled,
  onChange,
  isColorReverse = false,
  ...props
}: ToggleProps) => {
  const { isChecked, toggle } = useToggle(on);

  const handleChange = () => {
    toggle();
    onChange && onChange();
  };

  return (
    <ToggleContainer {...props}>
      <ToggleInput
        type="checkbox"
        name={name}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        $isColorReverse={isColorReverse}
      />
      <ToggleSwitch $isColorReverse={isColorReverse} />
    </ToggleContainer>
  );
};

export default Toggle;
