import { MouseEvent, ReactNode, useRef } from 'react';

import { DROP_DOWN } from '@/constants';
import { Col } from '@/styles/globalStyles';

import ShadowBox from '../ShadowBox';
import {
  Background,
  Body,
  Container,
  Item,
  Title,
  Wrapper,
} from './DropDown.style';

interface OptionType {
  id: number;
  title: ReactNode;
  body?: ReactNode;
  rightItem?: ReactNode;
  handler: () => void;
}

const DropDown = ({
  width = '100px',
  height = 'auto',
  options,
  mode = 'normal',
  isShow,
  onClose,
}: {
  width?: string;
  height?: string;
  options: OptionType[];
  mode?: 'normal' | 'checkbox';
  isShow: boolean;
  onClose: () => void;
}) => {
  const backgroundRef = useRef(null);

  const handleItemClick = () => {
    //각 아이템마다 실행시켜야할 핸들러 넣기
    // 그럼 options를 넘겨줄때, options ReactNode랑 핸들러 짝으로..
    //객체 배열로 넘겨주기?
    onClose();
  };

  const handleBackgroundClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (e.currentTarget === backgroundRef.current) {
      onClose();
    }
  };

  return (
    <Wrapper $isShow={isShow}>
      <Background
        ref={backgroundRef}
        onClick={handleBackgroundClick}
      />
      <ShadowBox
        width={width}
        height={height}
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.3rem',
          overflowX: 'hidden',
          zIndex: `${DROP_DOWN}`,
        }}
      >
        <Container>
          {options.map((option, index) => (
            <Item
              key={index}
              onClick={handleItemClick}
            >
              <Col>
                <Title>{option.title}</Title>
                <Body>{option.body}</Body>
              </Col>
              {mode === 'normal' && option.rightItem}
              {mode === 'checkbox' && <input type="checkbox" />}
            </Item>
          ))}
          {mode === 'checkbox' && <button>테스트</button>}
        </Container>
      </ShadowBox>
    </Wrapper>
  );
};

export default DropDown;
