import { useCallback } from 'react';

import { notify } from '@/hooks/toast';
import useResize from '@/hooks/useResize';
import { Tag } from '@/types';

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
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
         isLimit={true}
      />
 * @description 공통 TagFilter 컴포넌트
 * @param setSelectedTags 필수) TagFilter에서 선택한 태그들입니다.
 * @param selectedTags 필수) TagFilter에서 초기 선택된 태그를 설정하기 위한 prop입니다.
 * @param tagList 필수) 태그들의 정보를 받아옵니다.
 * @param isLimit 선택) 선택하는 태그를 3개만 선택할수있도록 제한하는 옵션입니다. boolean값이고 default는 false입니다.
 * @returns
 */

const TagFilter = ({
  tagList,
  selectedTags,
  setSelectedTags,
  isLimit = false,
  ...props
}: TagFilterProps) => {
  const isSelectedTag = useCallback(
    (item: Tag) => {
      return selectedTags.find((tag) => tag.id === item.id);
    },
    [selectedTags]
  );
  const { isMobileSize } = useResize();

  const toggleActiveName = useCallback(
    (tag: Tag) => {
      if (isLimit && selectedTags.length >= 3 && !isSelectedTag(tag)) {
        notify({
          type: 'warning',
          text: '태그는 3개까지만 선택할 수 있습니다!',
        });
        return;
      }

      if (isSelectedTag(tag)) {
        setSelectedTags(
          selectedTags.filter((selectedTag) => selectedTag.id !== tag.id)
        );
      } else {
        setSelectedTags([...selectedTags, tag]);
      }
    },
    [isSelectedTag, selectedTags, setSelectedTags, isLimit]
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
                  $size={isMobileSize ? 'xs' : 's'}
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
