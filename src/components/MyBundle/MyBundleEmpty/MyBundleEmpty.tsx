import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import { useTheme } from 'styled-components';

import Button from '@/components/common/Button';
import IconWrapper from '@/components/common/IconWrapper';
import useResize from '@/hooks/useResize';

import { useMyBundleModal } from '../MyBundleModal/MyBundleModal.hook';
import { Container, IconAnimation, Text } from './MyBundleEmpty.style';

const MyBundleEmpty = () => {
  const theme = useTheme();
  const { isMobileSize } = useResize();
  const { handleAddBundleClick } = useMyBundleModal();

  return (
    <Container>
      <img
        src="/kiwing_circle_transparent.png"
        alt="kiwing logo"
        style={{
          width: '30%',
        }}
      />
      <Text>나만의 꾸러미를 생성해보세요!</Text>
      <IconAnimation>
        <IconWrapper
          $size={'l'}
          $fillColor={theme.gray_300}
          style={{
            cursor: 'auto',
          }}
        >
          <MdOutlineKeyboardDoubleArrowDown />
        </IconWrapper>
      </IconAnimation>
      <Button
        width="80%"
        height="5rem"
        text="+ 새 질문 꾸러미 추가하기"
        onClick={handleAddBundleClick}
        style={{
          position: isMobileSize ? 'absolute' : 'inherit',
          bottom: '11rem',
        }}
      />
    </Container>
  );
};

export default MyBundleEmpty;
