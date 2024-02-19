import { MdSearch } from 'react-icons/md';

import IconWrapper from '../IconWrapper';
import Input from '../Input';
import { SearchBarWrapper } from './SearchBar.style';
import { SearchBarProps } from './SearchBar.type';

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
          style={{ paddingRight: '3rem' }}
          {...props}
        />
      </form>
      <IconWrapper
        $size={'xs'}
        onClick={handleSearchIcon}
      >
        <MdSearch />
      </IconWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
