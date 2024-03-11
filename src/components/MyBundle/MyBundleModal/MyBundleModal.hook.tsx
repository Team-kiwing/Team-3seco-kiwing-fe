import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERYKEY } from '@/constants/queryKeys';
import { notify } from '@/hooks/toast';
import { useModal } from '@/hooks/useModal';
import { createBundle, updateBundle } from '@/services/bundles';
import { BundlesCreateRequest, BundlesUpdateRequest } from '@/types';

import MyBundleModal from './MyBundleModal';
import { MODAL } from './MyBundleModal.const';
import { EditProps } from './MyBundleModal.type';

export const useCreateBundle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ name, shareType, tagIds }: BundlesCreateRequest) =>
      createBundle({ name, shareType, tagIds }),
    onSuccess: () => {
      notify({
        type: 'success',
        text: MODAL.SUCCESS_NOTIFY('add'),
      });
      queryClient.refetchQueries({
        queryKey: [QUERYKEY.MY_BUNDLES],
      });
    },
    onError: () => {
      notify({
        type: 'error',
        text: MODAL.ERROR_NOTIFY('add'),
      });
    },
  });
};

export const useUpdateBundle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ bundleId, name, shareType, tagIds }: BundlesUpdateRequest) =>
      updateBundle({ bundleId, name, shareType, tagIds }),
    onSuccess: () => {
      notify({
        type: 'success',
        text: MODAL.SUCCESS_NOTIFY('edit'),
      });
      queryClient.refetchQueries({
        queryKey: [QUERYKEY.MY_BUNDLES],
      });
      queryClient.refetchQueries({
        queryKey: [QUERYKEY.BUNDLE_DETAIL],
      });
    },
    onError: () => {
      notify({
        type: 'error',
        text: MODAL.ERROR_NOTIFY('edit'),
      });
    },
  });
};

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
    bundleId,
    setIsToggleShared,
  }: EditProps) => {
    setModalOpen({
      title: MODAL.TITLE,
      content: (
        <MyBundleModal
          modalMode="edit"
          bundleId={bundleId}
          bundleNameField={bundleNameField}
          selectedTagsField={selectedTagsField}
          isSharedField={isSharedField}
          setIsToggleShared={setIsToggleShared}
        />
      ),
    });
  };

  return { handleAddBundleClick, handleEditBundleClick };
};
