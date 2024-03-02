import { useQuery } from '@tanstack/react-query';

import { useModal } from '@/hooks/useModal';
import { getTag } from '@/services/etc';
import { Tag } from '@/types';

import { MyBundleModal } from './MyBundleList.Modal';

export const useFetchTags = () => {
  const query = useQuery<Tag[] | null>({
    queryKey: ['tags'],
    queryFn: getTag,
  });

  return query;
};

export const useMyBundleModal = ({ tags }: { tags: Tag[] }) => {
  const { setModalOpen } = useModal();

  const handleAddButtonClick = () => {
    setModalOpen({
      title: '질문 꾸러미',
      content: <MyBundleModal tags={tags} />,
    });
  };

  return { handleAddButtonClick };
};
