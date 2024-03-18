import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import Button from '@/components/common/Button';
import IconWrapper from '@/components/common/IconWrapper';
import { PATH } from '@/constants/router';
import useResize from '@/hooks/useResize';

import { useMyBundleModal } from '../MyBundleModal/MyBundleModal.hook';
import {
  Container,
  IconAnimation,
  SharedText,
  SmallText,
  Text,
  TextContainer,
} from './MyBundleEmpty.style';

const MyBundleEmpty = () => {
  const theme = useTheme();
  const navigator = useNavigate();
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

      <TextContainer>
        <Text>아직 꾸러미가 하나도 없어요😢</Text>
        <Text>면접을 대비하기 위한 나만의 꾸러미를 생성해보세요!</Text>
        <div>
          <SmallText>만약 다른 사람의 꾸러미를 가져오고 싶다면?{` `}</SmallText>
          <SharedText onClick={() => navigator(PATH.SHARED)}>
            공유된 꾸러미
          </SharedText>
          <SmallText>로 이동하기</SmallText>
        </div>
      </TextContainer>

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
