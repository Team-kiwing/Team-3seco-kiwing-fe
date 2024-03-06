import { useModal } from '@/hooks/useModal';

import MyBundleModal from './MyBundleModal';
import { MODAL } from './MyBundleModal.const';
import { FormField } from './MyBundleModal.type';

export const useMyBundleModal = () => {
  const { setModalOpen } = useModal();

  const handleAddBundleClick = () => {
    setModalOpen({
      title: MODAL.TITLE,
      content: <MyBundleModal />,
    });
  };

  const handleEditBundleClick = ({
    bundleNameField,
    selectedTagsField,
    isSharedField,
  }: FormField) => {
    setModalOpen({
      title: MODAL.TITLE,
      content: (
        <MyBundleModal
          mode="edit"
          bundleNameField={bundleNameField}
          selectedTagsField={selectedTagsField}
          isSharedField={isSharedField}
        />
      ),
    });
  };

  return { handleAddBundleClick, handleEditBundleClick };
};
