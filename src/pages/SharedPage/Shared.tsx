import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import BundleCard from '@/components/common/BundleCard';
import NoSearchResults from '@/components/common/NoSearchResults';
import {
  NO_SEARCH_RESULTS_ALT_IMAGE,
  NO_SEARCH_RESULTS_IMAGE,
} from '@/components/common/NoSearchResults/NoSearchResults.const';
import SearchBar from '@/components/common/SearchBar';
import Selector from '@/components/common/Selector';
import Spinner from '@/components/common/Spinner';
import TagFilter from '@/components/common/TagFilter';
import { useFetchTags } from '@/hooks/useFetchTags';
import useResize from '@/hooks/useResize';
import { BundlesBasic, SortingType, Tag } from '@/types';

import { SharedHookConstants, SharedTextConstants } from './Shared.const';
import {
  useIntersectionObserver,
  useSearchBundlesInfinite,
} from './Shared.hook';
import {
  CardWrapper,
  SearchWrapper,
  Section1,
  Section2,
  SelectorWrapper,
  SharedNextPageNone,
  SharedSearchError,
  SharedWrapper,
  TagFilterWrapper,
} from './Shared.style';

const Shared = () => {
  const [isRecent, setIsRecent] = useState<SortingType>('POPULAR');
  const { data: tags } = useFetchTags();
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [searchedBundles, setSearchedBundles] = useState<string>('');
  const { isMobileSize } = useResize();

  const tagsId = selectedTags.map((tag) => tag.id);
  const methods = useForm({ mode: 'onSubmit' });
  const REGISTER = SharedHookConstants.SHARED_SEARCH_REGISTER;

  const onSubmit = () => {
    const searchedBundles = methods.getValues(REGISTER).trim();
    if (searchedBundles !== '') {
      setSearchedBundles(searchedBundles);
    } else {
      setSearchedBundles('');
    }
  };

  const {
    data: infinityData,
    isFetching,
    isFetchingNextPage,
    isError,
    hasNextPage,
    fetchNextPage,
  } = useSearchBundlesInfinite(tagsId, searchedBundles, isRecent);

  const { targetRef } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  return (
    <>
      <SharedWrapper>
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
              REGISTER={REGISTER}
            />
          </FormProvider>
        </SearchWrapper>
        <SelectorWrapper>
          <Selector
            isState={isRecent === 'LATEST'}
            setIsState={(isRecent) =>
              setIsRecent(isRecent ? 'LATEST' : 'POPULAR')
            }
            content={[
              SharedHookConstants.SHARED_SELECTOR_CONTENT[0],
              SharedHookConstants.SHARED_SELECTOR_CONTENT[1],
            ]}
          />
        </SelectorWrapper>
        {isFetching && <Spinner />}
        {!isFetching &&
        !isFetchingNextPage &&
        infinityData?.pages[0]?.content.length === 0 ? (
          <NoSearchResults
            text1="앗"
            text2="검색된 결과가 없습니다."
            alt={NO_SEARCH_RESULTS_ALT_IMAGE}
            src={NO_SEARCH_RESULTS_IMAGE}
          />
        ) : (
          <>
            <CardWrapper>
              {!isMobileSize ? (
                <>
                  <Section1>
                    {infinityData &&
                      infinityData.pages.map((pageList) => {
                        return pageList?.content.map(
                          (bundle: BundlesBasic, index) =>
                            bundle.shareType === 'PUBLIC' &&
                            index % 2 === 0 && (
                              <BundleCard
                                key={bundle.id}
                                bundleName={bundle.name}
                                hashTags={bundle.tags}
                                id={bundle.id}
                                subscribedCount={bundle.scrapeCount}
                                isHot={bundle.isHot}
                              />
                            )
                        );
                      })}
                  </Section1>
                  <Section2>
                    {infinityData &&
                      infinityData.pages.map((pageList) => {
                        return pageList?.content.map(
                          (bundle: BundlesBasic, index) =>
                            bundle.shareType === 'PUBLIC' &&
                            index % 2 === 1 && (
                              <BundleCard
                                key={bundle.id}
                                bundleName={bundle.name}
                                hashTags={bundle.tags}
                                id={bundle.id}
                                subscribedCount={bundle.scrapeCount}
                                isHot={bundle.isHot}
                              />
                            )
                        );
                      })}
                  </Section2>
                </>
              ) : (
                <Section1>
                  {infinityData &&
                    infinityData.pages.map((pageList) => {
                      return pageList?.content.map(
                        (bundle: BundlesBasic) =>
                          bundle.shareType === 'PUBLIC' && (
                            <BundleCard
                              key={bundle.id}
                              bundleName={bundle.name}
                              hashTags={bundle.tags}
                              id={bundle.id}
                              subscribedCount={bundle.scrapeCount}
                              isHot={bundle.isHot}
                            />
                          )
                      );
                    })}
                </Section1>
              )}
              <div ref={targetRef} />
            </CardWrapper>
          </>
        )}
        {infinityData?.pages[0]?.content.length &&
        !hasNextPage &&
        !isFetchingNextPage ? (
          <SharedNextPageNone>
            {SharedTextConstants.SHARED_NEXT_PAGE_NONE_BUTTON}
          </SharedNextPageNone>
        ) : null}
        {isError && (
          <SharedSearchError>
            {SharedTextConstants.SHARED_ERROR_MESSAGE}
          </SharedSearchError>
        )}
      </SharedWrapper>
    </>
  );
};

export default Shared;
