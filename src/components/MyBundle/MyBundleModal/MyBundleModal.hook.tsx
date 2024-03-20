import { useMutation, useQueryClient } from '@tanstack/react-query';
import { MutableRefObject } from 'react';

import { QUERYKEY } from '@/constants/queryKeys';
import { notify } from '@/hooks/toast';
import { useModal } from '@/hooks/useModal';
import { createBundle, updateBundle } from '@/services/bundles';
import { BundlesCreateRequest, BundlesUpdateRequest } from '@/types';

import MyBundleModal from './MyBundleModal';
import { MODAL } from './MyBundleModal.const';
import { EditProps } from './MyBundleModal.type';

export const useCreateBundle = (
  bundlesEndRef: MutableRefObject<HTMLDivElement | null> | undefined
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ name, shareType, tagIds }: BundlesCreateRequest) =>
      createBundle({ name, shareType, tagIds }),
    onSuccess: (res) => {
      if (res) {
        notify({
          type: 'success',
          text: MODAL.SUCCESS_NOTIFY('add'),
        });
        queryClient.refetchQueries({
          queryKey: [QUERYKEY.MY_BUNDLES],
        });
      } else {
        notify({
          type: 'error',
          text: MODAL.ERROR_NOTIFY('add'),
        });
      }

      setTimeout(() => {
        if (bundlesEndRef && bundlesEndRef.current) {
          bundlesEndRef.current.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }, 200);
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
    onSuccess: (res) => {
      if (res) {
        notify({
          type: 'success',
          text: MODAL.SUCCESS_NOTIFY('edit'),
        });
        queryClient.invalidateQueries({
          queryKey: [QUERYKEY.MY_BUNDLES],
        });
        // @TODO 추후에 리패치 최적화 진행하기. 꾸러미 편집 후 토글 하면 업데이트가 안되는 현상
        queryClient.invalidateQueries({
          queryKey: [QUERYKEY.BUNDLE_DETAIL],
        });
      } else {
        notify({
          type: 'error',
          text: MODAL.ERROR_NOTIFY('edit'),
        });
      }
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

  const handleAddBundleClick = (
    bundlesEndRef: MutableRefObject<HTMLDivElement | null>
  ) => {
    setModalOpen({
      title: MODAL.TITLE,
      content: <MyBundleModal bundlesEndRef={bundlesEndRef} />,
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
