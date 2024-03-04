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

  useEffect(() => {
    fetch('/bundles')
      .then((res) => res.json())
      .then((data) => setBundles(data));
  }, []);
  if (bundles.length === 0) {
    return null;
  }

  const tagList = [
    // 나중에 api 로직으로 대체
    { id: 1, content: '개발자' },
    { id: 2, content: '백엔드' },
    { id: 3, content: '서버' },
    { id: 4, content: '시스템' },
    { id: 5, content: '보안' },
    { id: 6, content: '프론트엔드' },
    { id: 7, content: '머신러닝' },
    { id: 8, content: 'QA' },
    { id: 9, content: '안드로이드' },
    { id: 10, content: '크로스플랫폼앱' },
    { id: 11, content: '데이터' },
    { id: 12, content: 'SW' },
    { id: 13, content: 'DevOps' },
    { id: 14, content: 'DBA' },
    { id: 15, content: '네트워크' },
    { id: 16, content: '웹퍼블리셔' },
    { id: 17, content: '임베디드' },
    { id: 18, content: 'IOS' },
    { id: 19, content: 'HW' },
  ];

  return (
    <>
      <SharedWrapper>
        <TagFilterWrapper>
          <TagFilter
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            tagList={tagList}
          />
        </TagFilterWrapper>
        <SearchWrapper>
          <SearchBar />
        </SearchWrapper>
        <SelectorWrapper>
          <Selector
            isState={isRecent}
            content={[
              SelectorConstants.RECENT_SORT_TEXT,
              SelectorConstants.POPULAR_SORT_TEXT,
            ]}
            onSelected={setIsRecent}
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
