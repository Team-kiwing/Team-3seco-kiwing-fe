import { Circle, ContainerCircle } from './CircleButton.style';
import { CircleButtonProps } from './CircleButton.type';

const CircleButton = ({
  size = '10rem',
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
