import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SyncLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

import Button from '@/components/common/Button';
import NoSearchResults from '@/components/common/NoSearchResults';
import {
  NO_SEARCH_RESULTS_ALT_IMAGE,
  NO_SEARCH_RESULTS_IMAGE,
} from '@/components/common/NoSearchResults/NoSearchResults.const';
import QuestionCard from '@/components/common/QuestionCard';
import { useGetMyBundles } from '@/components/common/QuestionCard/QuestionCard.hook';
import SearchBar from '@/components/common/SearchBar';
import Selector from '@/components/common/Selector';
import TagFilter from '@/components/common/TagFilter';
import { useFetchTags } from '@/hooks/useFetchTags';
import { userDataStore } from '@/stores';
import { Question, SortingType, Tag } from '@/types';

import {
  SearchWrapper,
  SelectorWrapper,
  TagFilterWrapper,
} from '../SharedPage/Shared.style';
import { HubHookConstants, HubTextConstants } from './Hub.const';
import { useSearchQuestionsInfinite } from './Hub.hook';
import {
  HubFooterContainer,
  HubInfiniteMessage,
  HubLayout,
  HubQuestionCardContainer,
  HubSearchError,
  HubSpinnerContainer,
} from './Hub.style';

const Hub = () => {
  const theme = useTheme();
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [isRecent, setIsRecent] = useState<SortingType>('POPULAR');
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

  const { data: userBundles, refetch: getMyBundlesRefetch } =
    useGetMyBundles('LATEST');

  useEffect(() => {
    isLogin && getMyBundlesRefetch();
  }, [getMyBundlesRefetch, isLogin]);

  return (
    <>
      <HubLayout>
        <TagFilterWrapper>
          <TagFilter
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            tagList={tags ?? []}
          />
        </TagFilterWrapper>
        <SearchWrapper>
          <FormProvider {...methods}>
            <SearchBar
              isOnlyBorderBottom={true}
              fontSize={1.8}
              handleSearchSubmit={onSubmit}
              REGISTER={HubHookConstants.HUB_SEARCH_REGISTER}
            />
          </FormProvider>
        </SearchWrapper>
        <SelectorWrapper>
          <Selector
            isState={isRecent === 'LATEST'}
            content={HubHookConstants.HUB_SELECTOR_CONTENT}
            setIsState={(item: boolean) =>
              setIsRecent(item ? 'LATEST' : 'POPULAR')
            }
          />
        </SelectorWrapper>

        {isFetching && (
          <HubSpinnerContainer>
            <SyncLoader color={theme.symbol_secondary_color} />
          </HubSpinnerContainer>
        )}

        <HubQuestionCardContainer $isLogin={isLogin}>
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
                    Bundle={userBundles ? userBundles : []}
                  />
                )
              );
            })}
          {!isFetching &&
            !isFetchingNextPage &&
            infinityData?.pages[0] &&
            infinityData?.pages[0].questionResponses.length === 0 && (
              <NoSearchResults
                text1="앗"
                text2="검색된 결과가 없습니다."
                alt={NO_SEARCH_RESULTS_ALT_IMAGE}
                src={NO_SEARCH_RESULTS_IMAGE}
              />
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
