import { useEffect, useState } from 'react';
import styled from 'styled-components';

import BundleCard from '@/components/common/BundleCard';
import { WebNavBar } from '@/components/common/Navigator';
import SearchBar from '@/components/common/SearchBar';
import Selector from '@/components/common/Selector';
import TagFilter from '@/components/common/TagFilter';
import { TagProps } from '@/components/common/TagFilter/TagFilter.type';

const SharedWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 5rem;
  flex-shrink: 1;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const TopWrapper = styled.div`
  width: 100%;
  margin: 5rem auto;
  display: flex;
  justify-content: center;
`;

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 0 auto;
  gap: 2rem;
  justify-content: start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SelectorWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  margin: 0 auto;
  grid-row-gap: 2rem;
  grid-column-gap: 10rem;
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;
  justify-items: center;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

interface Tag {
  id: number;
  tagName: string;
}

interface InterviewList {
  id: number;
  name: string;
  shareType: string;
  scrapeCount: number;
  tags: Tag[];
  isHot: boolean;
  createdAt: string;
  updatedAt: string;
}

const Shared = () => {
  const [selectedTags, setSelectedTags] = useState<TagProps[]>([]);
  const [isRecent, setIsRecent] = useState<boolean>(true);
  const [list, setList] = useState<InterviewList[]>([]);

  useEffect(() => {
    fetch('/bundles')
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);
  if (list.length === 0) {
    return null;
  }

  const tagList = [
    // 나중에 api 로직으로 대체
    { id: 1, name: '개발자' },
    { id: 2, name: '백엔드' },
    { id: 3, name: '서버' },
    { id: 4, name: '시스템' },
    { id: 5, name: '보안' },
    { id: 6, name: '프론트엔드' },
    { id: 7, name: '머신러닝' },
    { id: 8, name: 'QA' },
    { id: 9, name: '안드로이드' },
    { id: 10, name: '크로스플랫폼앱' },
    { id: 11, name: '데이터' },
    { id: 12, name: 'SW' },
    { id: 13, name: 'DevOps' },
    { id: 14, name: 'DBA' },
    { id: 15, name: '네트워크' },
    { id: 16, name: '웹퍼블리셔' },
    { id: 17, name: '임베디드' },
    { id: 18, name: 'IOS' },
    { id: 19, name: 'HW' },
  ];

  return (
    <>
      <WebNavBar />
      <SharedWrapper>
        <TopWrapper>
          <TagFilter
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            tagList={tagList}
          />
        </TopWrapper>

        <SearchWrapper>
          <SearchBar />
        </SearchWrapper>
        <SelectorWrapper>
          <Selector
            isState={isRecent}
            content={['최근순', '스크랩 순']}
            onSelected={(item) => setIsRecent(item)}
          />
        </SelectorWrapper>

        <CardWrapper>
          {list.map((item) => (
            <BundleCard
              key={item.id}
              id={item.id}
              bundleName={item.name}
              hashTags={item.tags}
              isHot={item.isHot}
              subscribedCount={item.scrapeCount}
            />
          ))}
        </CardWrapper>
      </SharedWrapper>
    </>
  );
};

export default Shared;
