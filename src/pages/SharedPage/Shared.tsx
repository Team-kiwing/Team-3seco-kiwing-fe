import { useEffect, useState } from 'react';

import BundleCard from '@/components/common/BundleCard';
import SearchBar from '@/components/common/SearchBar';
import Selector from '@/components/common/Selector';
import TagFilter from '@/components/common/TagFilter';
import { BundlesBasic, Tag } from '@/types';

import { SelectorConstants } from './Shared.const';
import { useBundleDisplay } from './Shared.hook';
import useBundleFilter from './Shared.hook';
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
  const [bundles, setBundles] = useState<BundlesBasic[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const { filteredBundles } = useBundleFilter({ selectedTags, bundles });
  const {
    recentBundles,
    popularBundles,
    recentFilterBundles,
    popularFilteredBundles,
  } = useBundleDisplay({ bundles, filteredBundles });

  const displayBundle = () => {
    if (selectedTags.length == 0) {
      if (isRecent) {
        return recentBundles.map(
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
        return popularBundles.map(
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
        return recentFilterBundles.map(
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
        return popularFilteredBundles.map(
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
    fetch('/bundles')
      .then((res) => res.json())
      .then((data) => setBundles(data));

    fetch('/api/v1/tags')
      .then((res) => res.json())
      .then((res) => setTags(res.data));
  }, []);

  if (bundles.length === 0) {
    return null;
  }

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
          <SearchBar />
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
