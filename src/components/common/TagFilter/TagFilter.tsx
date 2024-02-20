import { useCallback, useEffect, useState } from 'react';

import Badge from '../Badge';
import ShadowBox from '../ShadowBox';
import {
  BadgeWrapper,
  Label,
  TagFilterWrapper,
  TagItemWrapper,
  TextWrapper,
} from './TagFilter.style';
import { TagFilterProps } from './TagFilter.type';

/**
 * @summary 사용법   <TagFilter
        tagList={tagList}
        defaultTags={selectedTag}
        selectedTags={(item) => setSelectedTag(item)}
      />
 * @description 공통 TagFilter 컴포넌트
 * @param selectedTags 필수) TagFilter에서 선택한 태그들입니다.
 * @param defaultTags 필수) TagFilter에서 초기 선택된 태그를 설정하기 위한 prop입니다.
 * @param tagList 필수) 태그들의 정보를 받아옵니다.
 * @returns
 */

const TagFilter = ({
  selectedTags,
  tagList,
  defaultTags,
  ...props
}: TagFilterProps) => {
  const [activeTags, setActiveTags] = useState<string[]>(defaultTags);

  useEffect(() => {
    selectedTags(activeTags);
  }, [activeTags, selectedTags]);

  const toggleActiveName = useCallback(
    (name: string) => {
      setActiveTags((activeTags) => {
        if (activeTags.includes(name)) {
          // 이미 선택된 항목인 경우 선택 해제
          return activeTags.filter((tag) => tag !== name);
        } else {
          // 새로운 항목을 선택
          return [...activeTags, name];
        }
      });
    },
    [setActiveTags]
  );

  return (
    <TagFilterWrapper {...props}>
      <ShadowBox
        width={'100%'}
        height={'100%'}
      >
        <TagItemWrapper>
          <TextWrapper>
            <Label>개발</Label>
          </TextWrapper>
          <BadgeWrapper>
            {tagList.map((item) => {
              return (
                <Badge
                  key={item.id}
                  $state={activeTags.includes(item.name) ? 'focus' : 'basic'}
                  onClick={() => toggleActiveName(item.name)}
                  $size={'s'}
                  style={{ margin: '3px' }}
                  $isHover={true}
                  $text={item.name}
                />
              );
            })}
          </BadgeWrapper>
        </TagItemWrapper>
      </ShadowBox>
    </TagFilterWrapper>
  );
};

export default TagFilter;
