import {
  ErrorMessage,
  Label,
  StyledTextarea,
  TextareaWrapper,
} from './Textarea.style';
import { TextareaProps } from './Textarea.type';

/**
 *
 * @description 공통 Textarea 컴포넌트
 * @summary 사용법 :
 * <Textarea
        width={'50rem'}
        height={'50rem'}
        fontSize={2}
        margin={1.5}
        label={'라벨이다'}
        placeholder={'닉네임 써라'}
        errorMessage={'에러다'}
      />
 * @param width : 필수 | string 타입. textarea의 너비를 의미함. (px or rem or % 로 기입)
 * @param height : 필수 | string 타입. textarea의  높이를 의미함. (px or rem or % 로 기입)
 * @param fontSize : 선택 | number 타입. 라벨, textarea, 에러 메시지의 폰트 사이즈를 의미. 생략 시 기본 값으로 2가 설정. (단위는 rem)
 * @param margin : 선택 | number 타입. 라벨, textarea, 에러 메시지 간 간격을 의미. 생략 시 기본 값으로 1.5가 설정. (단위는 rem)
 * @param label : 선택 | string 타입. textarea 위에 붙는 라벨 역할.
 * @param placeholder : 선택 | string 타입. textarea의 placeholder 역할.
 * @param errorMessage : 선택 | string 타입. textarea의 에러 메시지 역할.
 * @param ...props : 커스텀을 위함 (+ react-hook-form)
 * @returns
 */

const Textarea = ({
  width,
  height,
  fontSize,
  margin,
  label,
  placeholder,
  errorMessage,
  ...props
}: TextareaProps) => {
  return (
    <TextareaWrapper
      $width={width}
      $fontSize={fontSize}
    >
      {label && <Label $margin={margin}>{label}</Label>}
      <StyledTextarea
        $height={height}
        placeholder={placeholder}
        {...props}
      />
      <ErrorMessage
        $fontSize={fontSize}
        $isError={errorMessage?.length === 0}
        $margin={margin}
      >
        {errorMessage?.length === 0 ? 'no Error' : errorMessage}
      </ErrorMessage>
    </TextareaWrapper>
  );
};

export default Textarea;
