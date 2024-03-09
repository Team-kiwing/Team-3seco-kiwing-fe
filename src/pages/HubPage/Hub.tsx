import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import QuestionCard from '@/components/common/QuestionCard';
import SearchBar from '@/components/common/SearchBar';
import Selector from '@/components/common/Selector';
import TagFilter from '@/components/common/TagFilter';
import { useFetchTags } from '@/hooks/useFetchTags';
import { userDataStore } from '@/stores';
import { Question, SortingType, Tag } from '@/types';

import { HubHookConstants } from './Hub.const';
import { useSearchQuestionsInfinite } from './Hub.hook';
import { HubLayout } from './Hub.style';

const Hub = () => {
  console.log(`hubPage render`, new Date());
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [isRecent, setIsRecent] = useState<SortingType>('LATEST');
  const [searchParams, setSearchParams] = useState('');
  const { data: tags } = useFetchTags();
  const { isLogin } = userDataStore();

  const methods = useForm({ mode: 'onBlur' });
  const tagsId = selectedTags.map((tag) => tag.id);

  const {
    data: infinityData,
    isFetching,
    isFetchingNextPage,
    isError,
    hasNextPage,
    fetchNextPage,
  } = useSearchQuestionsInfinite(searchParams, isRecent, tagsId);

  console.log(infinityData, hasNextPage);

  const onSubmit = () => {
    const searchValues = methods
      .getValues(HubHookConstants.HUB_SEARCH_REGISTER)
      .trim();
    if (searchValues !== '') {
      setSearchParams(searchValues);
    } else {
      setSearchParams('');
    }
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
            handleSearchSubmit={onSubmit}
            maxWidth={'500px'}
            REGISTER={HubHookConstants.HUB_SEARCH_REGISTER}
          />
          <Selector
            isState={isRecent === 'LATEST'}
            content={HubHookConstants.HUB_SELECTOR_CONTENT}
            setIsState={(item: boolean) =>
              setIsRecent(item ? 'LATEST' : 'POPULAR')
            }
          />
        </FormProvider>
        {isFetching && <div>로딩즁</div>}
        {isError && <div>에러남!</div>}
        {isFetchingNextPage && <div>다음 페이지 불러오는 즁</div>}

        {infinityData
          ? infinityData.pages.map((pageList) => {
              return pageList?.questionResponses.map(
                (questionItem: Question) => (
                  <QuestionCard
                    key={questionItem.id}
                    tags={questionItem.tags}
                    id={questionItem.id}
                    content={questionItem.content}
                    shareCount={questionItem.shareCount}
                    isHot={questionItem.isHot}
                    isLogin={isLogin}
                  />
                )
              );
            })
          : null}

        {hasNextPage && (
          <button onClick={() => fetchNextPage()}>다음 페이지 불러오기</button>
        )}
      </HubLayout>
    </>
  );
};

export default Hub;
