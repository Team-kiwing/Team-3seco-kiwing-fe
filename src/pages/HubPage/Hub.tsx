import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SyncLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

import Button from '@/components/common/Button';
import QuestionCard from '@/components/common/QuestionCard';
import SearchBar from '@/components/common/SearchBar';
import Selector from '@/components/common/Selector';
import TagFilter from '@/components/common/TagFilter';
import { useFetchTags } from '@/hooks/useFetchTags';
import { userDataStore } from '@/stores';
import { Question, SortingType, Tag } from '@/types';

import { HubHookConstants, HubTextConstants } from './Hub.const';
import { useSearchQuestionsInfinite } from './Hub.hook';
import {
  HubFooterContainer,
  HubInfiniteMessage,
  HubLayout,
  HubQuestionCardContainer,
  HubSearchBarContainer,
  HubSearchError,
  HubSearchNone,
  HubSpinnerContainer,
  HubTagFilterContainer,
} from './Hub.style';

const Hub = () => {
  const theme = useTheme();
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
        <HubTagFilterContainer>
          <TagFilter
            style={{ marginTop: '2rem' }}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            tagList={tags ?? []}
          />
        </HubTagFilterContainer>
        <HubSearchBarContainer>
          <FormProvider {...methods}>
            <SearchBar
              handleSearchSubmit={onSubmit}
              maxWidth={'500px'}
              REGISTER={HubHookConstants.HUB_SEARCH_REGISTER}
            />
          </FormProvider>
          <Selector
            isState={isRecent === 'LATEST'}
            content={HubHookConstants.HUB_SELECTOR_CONTENT}
            setIsState={(item: boolean) =>
              setIsRecent(item ? 'LATEST' : 'POPULAR')
            }
          />
        </HubSearchBarContainer>

        {isFetching && (
          <HubSpinnerContainer>
            <SyncLoader color={theme.symbol_secondary_color} />
          </HubSpinnerContainer>
        )}

        <HubQuestionCardContainer>
          {infinityData &&
            infinityData.pages.map((pageList) => {
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
            })}
          {!isFetching &&
            !isFetchingNextPage &&
            infinityData?.pages[0] &&
            infinityData?.pages[0].questionResponses.length === 0 && (
              <HubSearchNone>{HubTextConstants.HUB_SEARCH_NONE}</HubSearchNone>
            )}
        </HubQuestionCardContainer>

        <HubFooterContainer>
          {hasNextPage && !isFetchingNextPage && (
            <Button
              width="100%"
              height="3rem"
              onClick={() => fetchNextPage()}
              text={HubTextConstants.HUB_NEXT_PAGE_BUTTON}
            />
          )}
          {infinityData?.pages[0]?.questionResponses.length &&
          !hasNextPage &&
          !isFetchingNextPage ? (
            <Button
              width="100%"
              height="3rem"
              disabled
              text={HubTextConstants.HUB_NEXT_PAGE_NONE_BUTTON}
            />
          ) : null}
          {isFetching && isFetchingNextPage && (
            <HubInfiniteMessage>
              {HubTextConstants.HUB_INFINITY_LOADING}
            </HubInfiniteMessage>
          )}
        </HubFooterContainer>
        {isError && (
          <HubSearchError>{HubTextConstants.HUB_ERROR_MESSAGE}</HubSearchError>
        )}
      </HubLayout>
    </>
  );
};

export default Hub;
