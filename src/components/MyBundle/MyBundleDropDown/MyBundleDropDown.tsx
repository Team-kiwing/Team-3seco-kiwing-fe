import { useQueryClient } from '@tanstack/react-query';
import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin5Line, RiFileCopyLine } from 'react-icons/ri';

import DropDown from '@/components/common/DropDown';
import IconWrapper from '@/components/common/IconWrapper';
import Toggle from '@/components/common/Toggle';
import { QUERYKEY } from '@/constants/queryKeys';
import { PATH } from '@/constants/router';
import { notify } from '@/hooks/toast';
import useResize from '@/hooks/useResize';
import { handleCopyClipBoard } from '@/utils/copyClip';

import { useUpdateBundle } from '../MyBundleModal/MyBundleModal.hook';
import { COPY_WARN_NOTIFY } from './MyBundleDropDown.const';
import { useDeleteBundle } from './MyBundleDropDown.hook';
import { MyBundleDropDownProps } from './MyBundleDropDown.type';

const MyBundleDropDown = ({
  isShared,
  setIsShared,
  isDropDownShow,
  setIsDropDownShow,
  closeDropDown,
  bundle,
  direction,
  handleEditBundleClick,
}: MyBundleDropDownProps) => {
  const queryClient = useQueryClient();
  const { isMobileSize } = useResize();
  const { mutate: updateBundle } = useUpdateBundle();
  const { mutate: deleteBundle } = useDeleteBundle();

  const handleDeleteBundle = () => {
    if (confirm(`[${bundle.name}] 꾸러미를 삭제하시겠습니까?`)) {
      deleteBundle(bundle.id);
    }
  };

  const handleEditBundle = () => {
    console.log(bundle);
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

        queryClient.invalidateQueries({
          queryKey: [QUERYKEY.MY_BUNDLES, QUERYKEY.BUNDLE_DETAIL],
        });
      },
    },

    {
      id: 2,
      title: '링크 복사',
      rightItem: (
        <IconWrapper $size={isMobileSize ? 1.8 : 'xs'}>
          <RiFileCopyLine />
        </IconWrapper>
      ),
      handler: () => {
        if (isShared) {
          const host = window.location.host;
          const pathname = `${PATH.SHARED}/${bundle.id}`;
          handleCopyClipBoard(host, pathname);
        } else {
          notify({
            type: 'warning',
            text: COPY_WARN_NOTIFY,
          });
        }
        setIsDropDownShow(false);
      },
    },
    {
      id: 3,
      title: '꾸러미 삭제',
      rightItem: (
        <IconWrapper $size={isMobileSize ? 1.8 : 'xs'}>
          <RiDeleteBin5Line />
        </IconWrapper>
      ),
      handler: () => {
        handleDeleteBundle();
        setIsDropDownShow(false);
      },
    },
    {
      id: 4,
      title: '꾸러미 편집',
      rightItem: (
        <IconWrapper $size={isMobileSize ? 1.8 : 'xs'}>
          <FiEdit3 />
        </IconWrapper>
      ),
      handler: () => {
        handleEditBundle();
        setIsDropDownShow(false);
      },
    },
  ];

  return (
    <DropDown
      width={13}
      optionHeight={5}
      options={options}
      isShow={isDropDownShow}
      setIsShow={setIsDropDownShow}
      direction={direction}
      closeDropDown={closeDropDown}
    />
  );
};

export default MyBundleDropDown;
