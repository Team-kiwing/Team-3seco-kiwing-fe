import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin5Line, RiFileCopyLine } from 'react-icons/ri';

import BorderBox from '@/components/common/BorderBox';
import IconWrapper from '@/components/common/IconWrapper';
import Toggle from '@/components/common/Toggle';
import { QUERYKEY } from '@/constants/queryKeys';
import { PATH } from '@/constants/router';
import { useFetchBundleDetail } from '@/hooks/api';
import { notify } from '@/hooks/toast';
import { handleCopyClipBoard } from '@/utils/copyClip';

import { useDeleteBundle } from '../MyBundleDropDown/MyBundleDropDown.hook';
import {
  useMyBundleModal,
  useUpdateBundle,
} from '../MyBundleModal/MyBundleModal.hook';
import { Item, Options, Text } from './MyBundleMenu.style';
import { MyBundleMenuProps } from './MyBundleMenu.type';

const MyBundleMenu = ({ bundleId, setSelectedBundleId }: MyBundleMenuProps) => {
  const queryClient = useQueryClient();

  const { data: bundle } = useFetchBundleDetail(bundleId);

  const [isShared, setIsShared] = useState(
    bundle ? bundle.shareType === 'PUBLIC' : false
  );
  const { handleEditBundleClick } = useMyBundleModal();
  const { mutate: updateBundle } = useUpdateBundle();
  const { mutate: deleteBundle } = useDeleteBundle();

  useEffect(() => {
    if (bundle) {
      queryClient.refetchQueries({
        queryKey: [QUERYKEY.BUNDLE_DETAIL, bundleId],
      });
      setIsShared(bundle.shareType === 'PUBLIC');
    }
  }, [bundle, queryClient, bundleId]);

  if (!bundle) {
    return <div>로딩중</div>;
  }

  const handleItemClick = (handler: (() => void) | undefined) => {
    if (handler) {
      handler();
    }
  };

  const handleDeleteBundle = () => {
    if (confirm(`[${bundle.name}] 꾸러미를 삭제하시겠습니까?`)) {
      deleteBundle(bundle.id);
      setSelectedBundleId(null);
      queryClient.removeQueries({
        queryKey: [QUERYKEY.BUNDLE_DETAIL, bundleId],
      });
    }
  };

  const handleEditBundle = () => {
    handleEditBundleClick({
      bundleId: bundle.id,
      bundleNameField: bundle.name,
      isSharedField: isShared,
      selectedTagsField: bundle.tags,
      setIsToggleShared: setIsShared,
    });
  };

  const options = [
    {
      id: 1,
      title: '공개 여부',
      rightItem: (
        <Toggle
          on={isShared}
          width="4rem"
        />
      ),

      handler: () => {
        setIsShared(!isShared);
        // @TODO 추후에 꾸러미 공개/비공개를 결정하는 api 로직을 연동합니다.

        updateBundle({
          bundleId: bundle.id,
          name: bundle.name,
          shareType: !isShared ? 'PUBLIC' : 'PRIVATE',
          tagIds: bundle.tags.map((tag) => tag.id),
        });
      },
    },

    {
      id: 2,
      title: '링크 복사',
      rightItem: (
        <IconWrapper $size={'xs'}>
          <RiFileCopyLine />
        </IconWrapper>
      ),
      handler: () => {
        if (isShared) {
          const host = window.location.host;
          const pathname = `${PATH.SHARED}/${bundle?.id}`;
          handleCopyClipBoard(host, pathname);
        } else {
          notify({
            type: 'warning',
            text: '공개된 리스트만 링크를 복사할 수 있습니다.',
          });
        }
      },
    },
    {
      id: 3,
      title: '꾸러미 삭제',
      rightItem: (
        <IconWrapper $size={'xs'}>
          <RiDeleteBin5Line />
        </IconWrapper>
      ),
      handler: () => {
        handleDeleteBundle();
      },
    },
    {
      id: 4,
      title: '꾸러미 편집',
      rightItem: (
        <IconWrapper $size={'xs'}>
          <FiEdit3 />
        </IconWrapper>
      ),
      handler: () => {
        if (!bundle) return;
        handleEditBundle();
      },
    },
  ];
  return (
    <BorderBox
      width="100%"
      height="fit-content"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexGrow: '0',
        boxSizing: 'border-box',
      }}
    >
      <Options>
        {options.map((option) => (
          <Item
            key={option.id}
            onClick={() => handleItemClick(option.handler)}
          >
            <Text>{option.title}</Text>
            <Text>{option.rightItem}</Text>
          </Item>
        ))}
      </Options>
    </BorderBox>
  );
};

export default MyBundleMenu;
