import { forwardRef } from 'react';

import { ErrorMessage, InputWrapper, Label, StyledInput } from './Input.style';
import { InputProps } from './Input.type';

/**
 *
 * @description 공통 Input 컴포넌트
 * @summary 사용법 :
 * <Input
        width={'50rem'}
        fontSize={2}
        margin={1.5}
        label={'라벨이다'}
        placeholder={'닉네임 써라'}
        errorMessage={'에러다'}
        isOnlyBorderBottom={true}
      />
 * @param width : 필수 | string 타입. input의 너비를 의미함. (px or rem or % 로 기입)
 * @param fontSize : 선택 | number 타입. 라벨, input, 에러 메시지의 폰트 사이즈를 의미. 생략 시 기본 값으로 1.6이 설정. 
 * 에러 메시지는 기본값이 1로 설정되며 fontSize props를 넘겨준 경우에 에러 메시지 폰트 사이즈는 (fontSize - 0.6) rem 만큼 설정됨. (단위는 rem)
 * @param margin : 선택 | number 타입. 라벨, input, 에러 메시지 간 간격을 의미. 생략 시 기본 값으로 1.5가 설정. (단위는 rem)
 * @param label : 선택 | string 타입. input 위에 붙는 라벨 역할.
 * @param placeholder : 선택 | string 타입. input의 placeholder 역할.
 * @param errorMessage : 선택 | string 타입. input의 에러 메시지 역할.
 * @param isOnlyBorderBottom : 선택 | boolean 타입. input의 border를 아래만 줄것인지 사방면으로 줄 것인지 결정하는 역할
 * @param ...props : input 태그 커스텀을 위함
 * @returns
 */

const Input = forwardRef(
  (
    {
      width,
      fontSize,
      margin,
      label,
      placeholder,
      errorMessage,
      inputType = 'text',
      isOnlyBorderBottom = true,
      isDisabled,
      ...props
    }: InputProps,
    ref?: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <InputWrapper
        $width={width}
        $fontSize={fontSize}
      >
        {label && <Label $margin={margin}>{label}</Label>}
        <StyledInput
          type={inputType}
          ref={ref}
          placeholder={placeholder}
          $isOnlyBorderBottom={isOnlyBorderBottom}
          disabled={isDisabled}
          {...props}
        />
        <ErrorMessage
          $fontSize={fontSize}
          $isError={errorMessage?.length === 0}
          $margin={margin}
        >
          {errorMessage?.length === 0 ? 'no Error' : errorMessage}
        </ErrorMessage>
      </InputWrapper>
    );
  }
);

export default Input;
