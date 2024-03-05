import { useQuery } from '@tanstack/react-query';

import { QUERYKEY } from '@/constants/queryKeys';
import { getTag } from '@/services/etc';
import { Tag } from '@/types';

export const useFetchTags = () => {
  const query = useQuery<Tag[] | null>({
    queryKey: [QUERYKEY.TAGS],
    queryFn: async () => await getTag(),
  });

  return query;
};
