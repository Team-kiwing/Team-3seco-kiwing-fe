import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import IconWrapper from '@/components/common/IconWrapper';
import { PATH } from '@/constants/router';

import {
  EmptyBody,
  HubText,
  IconAnimation,
  SmallText,
  TextContainer,
} from './MyQuestionEmpty.style';

const MyQuestionEmpty = () => {
  const navigator = useNavigate();
  const theme = useTheme();

  return (
    <EmptyBody>
      <img
        src="/kiwing_circle_transparent.png"
        alt="kiwing logo"
        style={{
          height: '35%',
        }}
      />

      <TextContainer>
        <span>아직 꾸러미 안에 질문이 하나도 없어요😢</span>
        <span>면접을 대비하기 위한 나만의 질문을 새로 추가해보세요!</span>
        <div>
          <SmallText>만약 다른 사람의 질문을 가져오고 싶다면?{` `}</SmallText>
          <HubText onClick={() => navigator(PATH.HUB)}>질문 허브</HubText>
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
    </EmptyBody>
  );
};

export default MyQuestionEmpty;
