import { ErrorMessage, InputWrapper, Label, StyledInput } from './Input.style';
import { InputProps } from './Input.type';

const Input = ({
  width,
  fontSize,
  margin,
  label,
  placeholder,
  errorMessage,
}: InputProps) => {
  return (
    <InputWrapper
      $width={width}
      $fontSize={fontSize}
    >
      <Label $margin={margin}>{label}</Label>
      <StyledInput placeholder={placeholder} />
      <ErrorMessage $margin={margin}>{errorMessage}</ErrorMessage>
    </InputWrapper>
  );
};

export default Input;
