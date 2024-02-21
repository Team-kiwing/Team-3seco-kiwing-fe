import useToggle from './Toggle.hook';
import { ToggleContainer, ToggleInput, ToggleSwitch } from './Toggle.style';
import { ToggleProps } from './Toggle.type';

const Toggle = ({
  name,
  on = false,
  disabled,
  onChange,
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
      />
      <ToggleSwitch />
    </ToggleContainer>
  );
};

export default Toggle;
