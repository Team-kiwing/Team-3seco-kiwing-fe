import { notify } from '@/hooks/toast';
import { useModal } from '@/hooks/useModal';
import { Tag } from '@/types';

import MyBundleModal from './MyBundleModal';
import { MODAL } from './MyBundleModal.const';
import { FormField } from './MyBundleModal.type';

export const useMyBundleModal = (tags: Tag[] | null | undefined) => {
  const { setModalOpen } = useModal();

  const handleAddBundleClick = () => {
    if (!tags) {
      notify({ type: 'warning', text: MODAL.FETCH_FAIL_NOTIFY });
    } else {
      setModalOpen({
        title: MODAL.TITLE,
        content: <MyBundleModal tags={tags} />,
      });
    }
  };

  const handleEditBundleClick = ({
    bundleNameField,
    selectedTagsField,
    isSharedField,
  }: FormField) => {
    if (!tags) {
      notify({ type: 'warning', text: MODAL.FETCH_FAIL_NOTIFY });
    } else {
      setModalOpen({
        title: MODAL.TITLE,
        content: (
          <MyBundleModal
            tags={tags}
            mode="edit"
            bundleNameField={bundleNameField}
            selectedTagsField={selectedTagsField}
            isSharedField={isSharedField}
          />
        ),
      });
    }
  };

  return { handleAddBundleClick, handleEditBundleClick };
};
