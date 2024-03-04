import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import BundleCard from '@/components/common/BundleCard';
import SearchBar from '@/components/common/SearchBar';
import Selector from '@/components/common/Selector';
import TagFilter from '@/components/common/TagFilter';
import { useFetchTags } from '@/hooks/useFetchTags';
import { Tag } from '@/types';

import { SelectorConstants } from './Shared.const';
import { useLatestBundles, usePopularBundles } from './Shared.hook';
import {
  CardWrapper,
  SearchWrapper,
  SelectorWrapper,
  SharedWrapper,
  TagFilterWrapper,
} from './Shared.style';

const Shared = () => {
  const [isRecent, setIsRecent] = useState<boolean>(true);
  const { data: tags } = useFetchTags();
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [searchedBundles, setSearchedBundles] = useState<string>('');

  const tagsId = selectedTags.map((tag) => tag.id);
  const methods = useForm({ mode: 'onSubmit' });
  const REGISTER = 'searchBundle';

  const onSubmit = async () => {
    const searchedBundles = methods.getValues(REGISTER).trim();
    if (searchedBundles !== '') {
      setSearchedBundles(searchedBundles);
    } else {
      setSearchedBundles('');
    }
  };

  const { data: latestBundles } = useLatestBundles(tagsId, searchedBundles);

  const { data: popularBundles } = usePopularBundles(tagsId, searchedBundles);

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
              handleSearchSubmit={onSubmit}
              REGISTER={REGISTER}
            />
          </FormProvider>
        </SearchWrapper>
        <SelectorWrapper>
          <Selector
            isState={isRecent}
            setIsState={setIsRecent}
            content={[
              SelectorConstants.RECENT_SORT_TEXT,
              SelectorConstants.POPULAR_SORT_TEXT,
            ]}
          />
        </SelectorWrapper>
        <CardWrapper>
          {isRecent ? (
            latestBundles?.content.length !== 0 ? (
              latestBundles?.content.map(
                (bundle) =>
                  bundle.shareType === 'PUBLIC' && (
                    <BundleCard
                      key={bundle.id}
                      id={bundle.id}
                      bundleName={bundle.name}
                      hashTags={bundle.tags}
                      isHot={bundle.isHot}
                      subscribedCount={bundle.scrapeCount}
                    />
                  )
              )
            ) : (
              <h1>검색된 결과가 없습니다.</h1>
            )
          ) : popularBundles?.content.length !== 0 ? (
            popularBundles?.content.map(
              (bundle) =>
                bundle.shareType === 'PUBLIC' && (
                  <BundleCard
                    key={bundle.id}
                    id={bundle.id}
                    bundleName={bundle.name}
                    hashTags={bundle.tags}
                    isHot={bundle.isHot}
                    subscribedCount={bundle.scrapeCount}
                  />
                )
            )
          ) : (
            <h1>검색된 결과가 없습니다.</h1>
          )}
        </CardWrapper>
      </SharedWrapper>
    </>
  );
};

export default Shared;
