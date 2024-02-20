import { MdSearch } from 'react-icons/md';

import IconWrapper from '../IconWrapper';
import Input from '../Input';
import { SearchBarWrapper } from './SearchBar.style';
import { SearchBarProps } from './SearchBar.type';

/**
 *
 * @description SearchBar 컴포넌트
 * @summary 사용법 :
 * import { useForm } from 'react-hook-form';

import SearchBar from '@/components/common/SearchBar';

const TestPage = () => {
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    alert('sumbit!');
  };

  return (
    <>
      <SearchBar
        handleSearchIcon={() => alert('검색됨!')}
        handleSubmit={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default TestPage;

 * @param handleSearchIcon : 선택 | 함수. 검색 아이콘에 들어갈 클릭 이벤트를 받음.
 * @param handleSubmit : 선택 | 함수. input에 검색어를 입력 후 엔터 할 때 submit 이벤트를 받음
 * @param ...props : 커스텀을 위함 (+ react-hook-form)
 * @returns
 */

const SearchBar = ({
  handleSearchIcon,
  handleSubmit,
  ...props
}: SearchBarProps) => {
  return (
    <SearchBarWrapper>
      <form onSubmit={handleSubmit}>
        <Input
          width={'100%'}
          margin={0}
          placeholder={'검색어를 입력해주세요.'}
          style={{ paddingRight: '3.8rem', paddingLeft: '.5rem' }}
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
