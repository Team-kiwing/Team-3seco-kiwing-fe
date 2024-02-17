import { useCallback, useEffect, useState } from 'react';

import Badge from '../Badge';
import ShadowBox from '../ShadowBox';
import {
  Label,
  TagFilterWrapper,
  TagWrapper,
  TextWrapper,
  Wrapper,
} from './TagFilter.style';
import { TagFilterProps, TagProps } from './TagFilter.type';

const TagFilter = ({ selectedTags, ...props }: TagFilterProps) => {
  const [activeName, setActiveName] = useState<string[]>([]);
  const tagList: TagProps[] = [
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
  useEffect(() => {
    selectedTags(activeName);
  }, [activeName, selectedTags]);

  const toggleActiveName = useCallback((name: string) => {
    setActiveName((prevName) => {
      if (prevName.includes(name)) {
        // 이미 선택된 항목인 경우 선택 해제
        return prevName.filter((prevId) => prevId !== name);
      } else {
        // 새로운 항목을 선택
        return [...prevName, name];
      }
    });
  }, []);

  return (
    <Wrapper {...props}>
      <ShadowBox
        width={'100%'}
        height={'100%'}
      >
        <TagFilterWrapper>
          <TextWrapper>
            <Label>개발</Label>
          </TextWrapper>
          <TagWrapper>
            {tagList.map((item) => {
              return (
                <Badge
                  key={item.id}
                  $state={activeName.includes(item.name) ? 'focus' : 'basic'}
                  onClick={() => toggleActiveName(item.name)}
                  $size={'s'}
                  style={{ margin: '3px' }}
                  $isHover={true}
                  $text={item.name}
                />
              );
            })}
          </TagWrapper>
        </TagFilterWrapper>
      </ShadowBox>
    </Wrapper>
  );
};

export default TagFilter;
