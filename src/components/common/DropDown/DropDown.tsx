import { MouseEvent, ReactNode, useRef, useState } from 'react';

import { DROP_DOWN } from '@/constants';
import { Col } from '@/styles/globalStyles';

import Button from '../Button';
import ShadowBox from '../ShadowBox';
import {
  Background,
  Body,
  CheckBoxInput,
  Container,
  Footer,
  Item,
  Options,
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
  buttonText = '추가',
  handler,
  isShow,
  onClose,
}: {
  width?: string;
  height?: string;
  options: OptionType[];
  mode?: 'normal' | 'checkbox';
  buttonText?: string;
  handler?: (checkedItems: number[]) => void;
  isShow: boolean;
  onClose: () => void;
}) => {
  const backgroundRef = useRef(null);

  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const checkedItemHandler = (id: number) => {
    const isChecked = checkedItems.includes(id);
    if (!isChecked) {
      const newCheckedItems = [...checkedItems, id];
      setCheckedItems(newCheckedItems);
    } else if (isChecked && checkedItems.includes(id)) {
      const newCheckedItems = checkedItems.filter((item) => item !== id);
      setCheckedItems(newCheckedItems);
    }
  };

  const handleItemClick = (handler: () => void) => {
    //각 아이템마다 실행시켜야할 핸들러 넣기
    // 그럼 options를 넘겨줄때, options ReactNode랑 핸들러 짝으로..
    //객체 배열로 넘겨주기?
    handler();
    onClose();
  };

  const handleButtonClick = () => {
    if (handler) {
      handler(checkedItems);
    }
    setCheckedItems([]);
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
          <Options>
            {options.map((option, index) => (
              <Item
                key={index}
                onClick={
                  mode === 'checkbox'
                    ? () => checkedItemHandler(option.id)
                    : () => handleItemClick(option.handler)
                }
              >
                <Col>
                  <Title>{option.title}</Title>
                  <Body>{option.body}</Body>
                </Col>
                {mode === 'normal' && option.rightItem}
                {mode === 'checkbox' && (
                  <CheckBoxInput
                    type="checkbox"
                    onChange={() => checkedItemHandler(option.id)}
                    checked={checkedItems.includes(option.id)}
                  />
                )}
              </Item>
            ))}
          </Options>
          <Footer>
            {mode === 'checkbox' && (
              <Button
                height="fit-content"
                style={{ padding: '0.5rem' }}
                text={buttonText}
                onClick={handleButtonClick}
              />
            )}
          </Footer>
        </Container>
      </ShadowBox>
    </Wrapper>
  );
};

export default DropDown;
