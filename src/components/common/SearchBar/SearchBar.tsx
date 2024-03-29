import { debounce } from 'lodash';
import { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { MdSearch } from 'react-icons/md';

import useResize from '@/hooks/useResize';

import IconWrapper from '../IconWrapper';
import Input from '../Input';
import { SearchBarWrapper } from './SearchBar.style';
import { SearchBarProps } from './SearchBar.type';

/**
 *
 * @description SearchBar 컴포넌트
 * @summary 사용법 :
      <FormProvider {...methods}>
        <SearchBar
          // fontSize={2}
          handleSearchSubmit={onSubmit}
          maxWidth={'500px'}
          REGISTER={REGISTER}
          VALIDATE={bundleValidate}
        />
      </FormProvider>
    </>

 * @param fontSize : 선택 | 숫자. 검색바의 폰트 사이즈를 결정 (기본값은 1.6rem)
 * @param handleSearchSubmit : 필수 | 함수. 검색어 입력 후 엔터 or 검색 아이콘을 눌렀을 때 실행 할 함수
 * @param maxWidth : 선택 | 문자. 검색바 컴포넌트의 최대 너비를 의미함. (px, rem, %를 다 받습니다.)
 * @param REGISTER : 필수 | 문자. react-hook-form을 이용하여 검색어 value를 추적할 register
 * @param VALIDATE : 선택 | RegisterOptions 타입. 검색어에 대한 validate
 * @returns
 */

const SearchBar = ({
  fontSize,
  handleSearchSubmit,
  maxWidth,
  REGISTER,
  VALIDATE,
  isOnlyBorderBottom = false,
}: SearchBarProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  // TODO: warning 원인 찾아서 해결하기. (useCallback에 의존성을 주면 함수 실행 자체가 안됨... 현재의 형태 말고는 debounce가 정상적으로 동작하는 형태가 없었는데, 코드 품질을 위해 해결해야함.)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const SearchSubmit = useCallback(
    debounce(() => {
      if (!errors[REGISTER]?.message) {
        handleSearchSubmit();
      }
    }, 500),
    []
  );

  const { isMobileSize } = useResize();

  return (
    <SearchBarWrapper $maxWidth={maxWidth}>
      <form onSubmit={handleSubmit(SearchSubmit)}>
        <Input
          width={'100%'}
          margin={0}
          fontSize={fontSize}
          placeholder={'검색어를 입력해주세요.'}
          style={{
            padding: '2rem 5rem 2rem 1.5rem',
            height: isMobileSize ? '3rem' : '4rem',
          }}
          {...register(REGISTER, VALIDATE)}
          isOnlyBorderBottom={isOnlyBorderBottom}
        />
      </form>
      <IconWrapper
        $size="s"
        onClick={SearchSubmit}
      >
        <MdSearch />
      </IconWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
