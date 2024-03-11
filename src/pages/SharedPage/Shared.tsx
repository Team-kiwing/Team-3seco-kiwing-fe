import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import BundleCard from '@/components/common/BundleCard';
import Button from '@/components/common/Button';
import SearchBar from '@/components/common/SearchBar';
import Selector from '@/components/common/Selector';
import Spinner from '@/components/common/Spinner';
import TagFilter from '@/components/common/TagFilter';
import { useFetchTags } from '@/hooks/useFetchTags';
import { BundlesBasic, SortingType, Tag } from '@/types';

import { SharedHookConstants, SharedTextConstants } from './Shared.const';
import { useSearchBundlesInfinite } from './Shared.hook';
import {
  CardWrapper,
  SearchWrapper,
  Section1,
  Section2,
  SelectorWrapper,
  SharedFooterWrapper,
  SharedInfiniteMessage,
  SharedSearchError,
  SharedSearchNone,
  SharedWrapper,
  TagFilterWrapper,
} from './Shared.style';

const Shared = () => {
  const [isRecent, setIsRecent] = useState<SortingType>('LATEST');
  const { data: tags } = useFetchTags();
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [searchedBundles, setSearchedBundles] = useState<string>('');

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
        <CardWrapper>
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
        </CardWrapper>
        {!isFetching &&
          !isFetchingNextPage &&
          infinityData?.pages[0]?.content.length === 0 && (
            <SharedSearchNone>
              {SharedTextConstants.SHARED_SEARCH_NONE}
            </SharedSearchNone>
          )}
        <SharedFooterWrapper>
          {hasNextPage && !isFetchingNextPage && (
            <Button
              width="100%"
              height="3rem"
              onClick={() => fetchNextPage()}
              text={SharedTextConstants.SHARED_NEXT_PAGE_BUTTON}
            />
          )}
          {infinityData?.pages[0]?.content.length &&
          !hasNextPage &&
          !isFetchingNextPage ? (
            <Button
              width="100%"
              height="3rem"
              disabled
              text={SharedTextConstants.SHARED_NEXT_PAGE_NONE_BUTTON}
            />
          ) : null}
          {isFetching && isFetchingNextPage && (
            <SharedInfiniteMessage>
              {SharedTextConstants.SHARED_INFINITY_LOADING}
            </SharedInfiniteMessage>
          )}
        </SharedFooterWrapper>
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
