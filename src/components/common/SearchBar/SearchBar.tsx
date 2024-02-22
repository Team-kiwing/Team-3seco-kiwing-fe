import { MdSearch } from 'react-icons/md';

import IconWrapper from '../IconWrapper';
import Input from '../Input';
import { SearchBarWrapper } from './SearchBar.style';
import { SearchBarProps } from './SearchBar.type';

/**
 *
 * @description SearchBar 컴포넌트
 * @summary 사용법 :
      <SearchBar
        handleSearchIcon={() => alert('검색됨!')}
        handleFormSubmit={handleSubmit(onSubmit)}
        width={'500px'}
      />

 * @param handleSearchIcon : 선택 | 함수. 검색 아이콘에 들어갈 클릭 이벤트를 받음.
 * @param handleFormSubmit : 선택 | 함수. input에 검색어를 입력 후 엔터 할 때 submit 이벤트를 받음 (react-hook-form의 handleSubmit 함수와 연관됨.)
 * @param maxWidth : 선택 | 문자열 타입. 검색바 컴포넌트의 최대 너비를 의미함. (px, rem, %를 다 받습니다.)
 * @param …props : 커스텀을 위함 (+ react-hook-form)
 * @returns
 */

const SearchBar = ({
  handleSearchIcon,
  handleFormSubmit,
  maxWidth,
  ...props
}: SearchBarProps) => {
  return (
    <SearchBarWrapper $maxWidth={maxWidth}>
      <form onSubmit={handleFormSubmit}>
        <Input
          width={'100%'}
          margin={0}
          placeholder={'검색어를 입력해주세요.'}
          style={{
            paddingRight: '3.8rem',
            paddingLeft: '.5rem',
            height: '3rem',
          }}
          {...props}
        />
      </form>
      <IconWrapper
        $size={'s'}
        onClick={handleSearchIcon}
      >
        <MdSearch />
      </IconWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
