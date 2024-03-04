import { useQuery } from '@tanstack/react-query';

import { getTag } from '@/services/etc';
import { Tag } from '@/types';

import { QUERY_KEY } from './MyBundleList.const';

export const useFetchTags = () => {
  const query = useQuery<Tag[] | null>({
    queryKey: [QUERY_KEY],
    queryFn: getTag,
  });

  return query;
};
