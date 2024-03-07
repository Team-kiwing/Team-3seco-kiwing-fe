import { useState } from 'react';

import TagFilter from '@/components/common/TagFilter';
import { useFetchTags } from '@/hooks/useFetchTags';
import { Tag } from '@/types';

import { HubLayout } from './Hub.style';

const Hub = () => {
  const { data: tags } = useFetchTags();
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  // 요기다가 하시면 됩니다
  return (
    <>
      <HubLayout>
        <TagFilter
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          tagList={tags ?? []}
        />
      </HubLayout>
    </>
  );
};

export default Hub;
