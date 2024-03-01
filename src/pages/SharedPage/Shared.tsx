import { useEffect, useState } from 'react';

import BundleCard from '@/components/common/BundleCard';
import SearchBar from '@/components/common/SearchBar';
import Selector from '@/components/common/Selector';
import TagFilter from '@/components/common/TagFilter';

import { SelectorConstants } from './Shared.const';
import {
  CardWrapper,
  SearchWrapper,
  SelectorWrapper,
  SharedWrapper,
  TagFilterWrapper,
} from './Shared.style';
import { BundleProps, TagProps } from './Shared.type';

const Shared = () => {
  const [selectedTags, setSelectedTags] = useState<TagProps[]>([]);
  const [isRecent, setIsRecent] = useState<boolean>(true);
  const [bundles, setBundles] = useState<BundleProps[]>([]);
  const [tags, setTags] = useState<TagProps[]>([]);

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
        <CardWrapper>
          {bundles.map((bundle) => (
            <BundleCard
              key={bundle.id}
              id={bundle.id}
              bundleName={bundle.name}
              hashTags={bundle.tags}
              isHot={bundle.isHot}
              subscribedCount={bundle.scrapeCount}
            />
          ))}
        </CardWrapper>
      </SharedWrapper>
    </>
  );
};

export default Shared;
