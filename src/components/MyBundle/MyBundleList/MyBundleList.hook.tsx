import { useQuery } from '@tanstack/react-query';

import { notify } from '@/hooks/toast';
import { useModal } from '@/hooks/useModal';
import { getTag } from '@/services/etc';
import { Tag } from '@/types';

import { MODAL, QUERY_KEY } from './MyBundleList.const';
import AddBundleModal from './MyBundleList.Modal';

export const useFetchTags = () => {
  const query = useQuery<Tag[] | null>({
    queryKey: [QUERY_KEY],
    queryFn: getTag,
  });

  return query;
};

export const useAddBundleModal = (tags: Tag[] | null | undefined) => {
  const { setModalOpen } = useModal();

  const handleAddBundleClick = () => {
    if (!tags) {
      notify({ type: 'warning', text: MODAL.FETCH_FAIL_NOTIFY });
    } else {
      setModalOpen({
        title: MODAL.TITLE,
        content: <AddBundleModal tags={tags} />,
      });
    }
  };

  return { handleAddBundleClick };
};
