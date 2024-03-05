import { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { RiDeleteBin5Line, RiFileCopyLine } from 'react-icons/ri';

import BorderBox from '@/components/common/BorderBox';
import IconWrapper from '@/components/common/IconWrapper';
import Toggle from '@/components/common/Toggle';
import { PATH } from '@/constants/router';
import { handleCopyClipBoard } from '@/utils/copyClip';

import { Item, Options, Text } from './MyBundleMenu.style';
import { MyBundleMenuProps } from './MyBundleMenu.type';

const MyBundleMenu = ({ bundle }: MyBundleMenuProps) => {
  const [isShared, setIsShared] = useState(false);

  const handleItemClick = (handler: (() => void) | undefined) => {
    if (handler) {
      handler();
    }
  };

  const handleDeleteBundle = () => {
    confirm(`id ${bundle.id} 꾸러미를 삭제하시겠습니까?`);
    // @TODO 추후에 꾸러미 삭제 API 함수를 호출합니다.
  };

  const handleEditBundle = () => {
    console.log(`id ${bundle.id} 꾸러미 편집`);
    // @TODO 추후에 꾸러미 편집을 할 수 있는 모달을 띄웁니다.
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
          // @TODO 추후에 alert -> 토스트 알림으로 변경합니다.
          alert('공개된 리스트만 링크를 복사할 수 있습니다.');
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
