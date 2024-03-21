import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin5Line, RiFileCopyLine } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { useTheme } from 'styled-components';

import IconWrapper from '@/components/common/IconWrapper';
import ShadowBox from '@/components/common/ShadowBox';
import Skeleton from '@/components/common/Skeleton';
import Toggle from '@/components/common/Toggle';
import { PATH } from '@/constants/router';
import { useFetchBundleDetail } from '@/hooks/api';
import { notify } from '@/hooks/toast';
import { handleCopyClipBoard } from '@/utils/copyClip';

import { useDeleteBundle } from '../MyBundleDropDown/MyBundleDropDown.hook';
import {
  useMyBundleModal,
  useUpdateBundle,
} from '../MyBundleModal/MyBundleModal.hook';
import { Item, Options, Text, TooltipContainer } from './MyBundleMenu.style';
import { MyBundleMenuProps } from './MyBundleMenu.type';

const MyBundleMenu = ({ setSelectedBundleId }: MyBundleMenuProps) => {
  const queryClient = useQueryClient();
  const theme = useTheme();
  const { bundleId: stringBundleId } = useParams();
  const bundleId = Number(stringBundleId);

  const { data: bundle } = useFetchBundleDetail(bundleId);

  const [isShared, setIsShared] = useState(
    bundle ? bundle.shareType === 'PUBLIC' : false
  );
  const { handleEditBundleClick } = useMyBundleModal();
  const { mutate: updateBundle } = useUpdateBundle();
  const { mutate: deleteBundle } = useDeleteBundle({
    setSelectedBundleId,
    bundleId,
  });

  useEffect(() => {
    if (bundle) {
      setIsShared(bundle.shareType === 'PUBLIC');
    }
  }, [bundle, queryClient, bundleId]);

  if (!bundle) {
    return (
      <ShadowBox
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
        <Skeleton.Paragraph
          $width="80%"
          $height="2rem"
          $line={4}
        />
      </ShadowBox>
    );
  }

  const handleItemClick = (handler: (() => void) | undefined) => {
    if (handler) {
      handler();
    }
  };

  const handleDeleteBundle = () => {
    if (confirm(`[${bundle.name}] 꾸러미를 삭제하시겠습니까?`)) {
      deleteBundle(bundle.id);
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
      title: '공유 여부',
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

      tooltip: isShared
        ? '현재 꾸러미가 공개 상태입니다.'
        : '현재 꾸러미가 비공개 상태입니다.',
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

      tooltip: '다른 사람에게 링크를 통해 꾸러미를 공유합니다.',
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
    <ShadowBox
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
        {options.map((option, index) =>
          index <= 1 ? (
            <TooltipContainer key={option.id}>
              <div
                data-tooltip-id="my-bundle-menu-tooltip"
                data-tooltip-content={option.tooltip}
                data-tooltip-delay-show={100}
              >
                <Item onClick={() => handleItemClick(option.handler)}>
                  <Text>{option.title}</Text>
                  <Text>{option.rightItem}</Text>
                </Item>
              </div>
              <Tooltip
                id="my-bundle-menu-tooltip"
                style={{
                  backgroundColor: theme.symbol_secondary_color,
                }}
                place="left"
              />
            </TooltipContainer>
          ) : (
            <TooltipContainer key={option.id}>
              <Item onClick={() => handleItemClick(option.handler)}>
                <Text>{option.title}</Text>
                <Text>{option.rightItem}</Text>
              </Item>
            </TooltipContainer>
          )
        )}
      </Options>
    </ShadowBox>
  );
};

export default MyBundleMenu;
