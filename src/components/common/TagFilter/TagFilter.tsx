import { useCallback } from 'react';

import Badge from '../Badge';
import ShadowBox from '../ShadowBox';
import {
  BadgeWrapper,
  Label,
  TagFilterWrapper,
  TagItemWrapper,
  TextWrapper,
} from './TagFilter.style';
import { TagFilterProps, TagProps } from './TagFilter.type';

/**
 * @summary 사용법   <TagFilter
        tagList={tagList}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
 * @description 공통 TagFilter 컴포넌트
 * @param setSelectedTags 필수) TagFilter에서 선택한 태그들입니다.
 * @param selectedTags 필수) TagFilter에서 초기 선택된 태그를 설정하기 위한 prop입니다.
 * @param tagList 필수) 태그들의 정보를 받아옵니다.
 * @returns
 */

const TagFilter = ({
  tagList,
  selectedTags,
  setSelectedTags,
  ...props
}: TagFilterProps) => {
  const isSelectedTag = useCallback(
    (item: TagProps) => {
      return selectedTags.find((tag) => tag.id === item.id);
    },
    [selectedTags]
  );

  const toggleActiveName = useCallback(
    (tag: TagProps) => {
      if (isSelectedTag(tag)) {
        setSelectedTags(
          selectedTags.filter((selectedTag) => selectedTag.id !== tag.id)
        );
      } else {
        setSelectedTags([...selectedTags, tag]);
      }
    },
    [isSelectedTag, selectedTags, setSelectedTags]
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
            {tagList.map((tag) => {
              return (
                <Badge
                  key={tag.id}
                  $state={isSelectedTag(tag) ? 'focus' : 'basic'}
                  onClick={() => toggleActiveName(tag)}
                  $size={'s'}
                  style={{ margin: '3px' }}
                  $isHover={true}
                  $text={tag.name}
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
