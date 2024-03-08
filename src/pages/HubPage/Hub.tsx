import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import SearchBar from '@/components/common/SearchBar';
import TagFilter from '@/components/common/TagFilter';
import { useFetchTags } from '@/hooks/useFetchTags';
import { Tag } from '@/types';

import { HubLayout } from './Hub.style';

const Hub = () => {
  console.log(`hubPage render`);
  const { data: tags } = useFetchTags();
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const methods = useForm({ mode: 'onBlur' });

  const REGISTER = 'hubSearch';

  const onSubmit = () => {
    // 검색 시 실행할 함수를 입력합니다.
    console.log(methods.getValues(REGISTER));
  };

  return (
    <>
      <HubLayout>
        <TagFilter
          style={{ marginTop: '2rem' }}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          tagList={tags ?? []}
        />
        <FormProvider {...methods}>
          <SearchBar
            // fontSize={2}
            handleSearchSubmit={onSubmit}
            maxWidth={'500px'}
            REGISTER={REGISTER}
          />
        </FormProvider>
      </HubLayout>
    </>
  );
};

export default Hub;
