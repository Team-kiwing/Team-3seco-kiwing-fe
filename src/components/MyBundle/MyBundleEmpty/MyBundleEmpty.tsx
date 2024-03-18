import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import { useTheme } from 'styled-components';

import Button from '@/components/common/Button';
import IconWrapper from '@/components/common/IconWrapper';
import ShadowBox from '@/components/common/ShadowBox';

import { useMyBundleModal } from '../MyBundleModal/MyBundleModal.hook';
import { Container, IconAnimation } from './MyBundleEmpty.style';

const MyBundleEmpty = () => {
  const theme = useTheme();
  const { handleAddBundleClick } = useMyBundleModal();

  return (
    <Container>
      <ShadowBox
        width="100%"
        height="100%"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        <img
          src="/kiwing_circle_transparent.png"
          alt="kiwing logo"
          style={{
            width: '30%',
          }}
        />
        <span>나만의 꾸러미를 생성해보세요!</span>
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
        />
      </ShadowBox>
    </Container>
  );
};

export default MyBundleEmpty;
