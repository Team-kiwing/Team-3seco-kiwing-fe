import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import BundleCard from '@/components/common/BundleCard';
import SearchBar from '@/components/common/SearchBar';
import Selector from '@/components/common/Selector';
import TagFilter from '@/components/common/TagFilter';
import { Tag } from '@/types';

import { SelectorConstants } from './Shared.const';
import {
  useLatestBundles,
  useLatestSearchedBundles,
  useLatestSelectedTagBundles,
  usePopularBundles,
  usePopularSearchedBundles,
  usePopularSelectedTagBundles,
} from './Shared.hook';
import {
  CardWrapper,
  SearchWrapper,
  SelectorWrapper,
  SharedWrapper,
  TagFilterWrapper,
} from './Shared.style';

const Shared = () => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [isRecent, setIsRecent] = useState<boolean>(true);
  const [tags, setTags] = useState<Tag[]>([]);
  const [searchedBundles, setSearchedBundles] = useState<string>('');
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const tagsId = selectedTags.map((tag) => tag.id);

  const { data: latestBundles } = useLatestBundles();
  const { data: popularBundles } = usePopularBundles();
  const { data: latestSelectedBundles } = useLatestSelectedTagBundles(tagsId);
  const { data: popularSelectedBundles } = usePopularSelectedTagBundles(tagsId);
  const { data: latestSearchedBundles } =
    useLatestSearchedBundles(searchedBundles);
  const { data: popularSearchedBundles } =
    usePopularSearchedBundles(searchedBundles);

  const methods = useForm({ mode: 'onSubmit' });
  const REGISTER = 'searchBundle';

  console.log(latestSearchedBundles, popularSearchedBundles);

  const onSubmit = async () => {
    const searchedBundles = methods.getValues(REGISTER).trim();
    setSearchedBundles(searchedBundles);
    setIsSearch(true);
  };

  const displayBundle = () => {
    if (!isSearch) {
      if (selectedTags.length == 0) {
        if (isRecent) {
          return latestBundles?.content?.map(
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
          );
        } else {
          return popularBundles?.content.map(
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
          );
        }
      } else {
        if (isRecent) {
          return latestSelectedBundles?.content?.map(
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
          );
        } else {
          return popularSelectedBundles?.content.map(
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
          );
        }
      }
    } else {
      if (isRecent) {
        return latestSearchedBundles?.content?.map(
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
        );
      } else {
        return popularSearchedBundles?.content.map(
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
        );
      }
    }
  };

  useEffect(() => {
    console.log(searchedBundles);
  }, [searchedBundles, isSearch]);

  useEffect(() => {
    fetch('/api/v1/tags')
      .then((res) => res.json())
      .then((res) => setTags(res));
  }, []);

  return (
    <>
      <SharedWrapper>
        <TagFilterWrapper>
          <TagFilter
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            tagList={tags}
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
        <CardWrapper>{displayBundle()}</CardWrapper>
      </SharedWrapper>
    </>
  );
};

export default Shared;
