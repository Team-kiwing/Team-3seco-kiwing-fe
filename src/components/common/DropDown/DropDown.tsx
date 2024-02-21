import { useState } from 'react';

import { DROP_DOWN } from '@/constants';
import { Col } from '@/styles/globalStyles';

import Button from '../Button';
import ShadowBox from '../ShadowBox';
import useClickAway from './DropDown.hook';
import {
  Body,
  CheckBoxInput,
  Container,
  Footer,
  Item,
  Options,
  Title,
  Wrapper,
} from './DropDown.style';
import { DropDownProps } from './DropDown.type';

/**
 * @summary DropDown 레이아웃 컴포넌트입니다.
 * @param options id,title,body,rightItem,handler을 갖고있는 option타입 배열입니다.
 * title(필수): 핵심 Text, body(선택): title 아래 보조 Text
 * rightItem(선택): 오른쪽에 들어갈 Item, handler(선택): 각 Item 클릭 시 호출할 handler 함수
 * @param mode 'normal', 'checkbox' 2가지 모드가 있습니다.
 * [normal]: option 1개만 선택
 * [checkbox]: option 여러개 선택
 * @param buttonText [checkbox] 모드 전용
 * @param handler [checkbox] 모드 전용. button handler로 사용됩니다.
 * @param isShow 외부에서 DropDown의 가시화 유무를 결정하는 상태값. setIsShow와 함께 넘겨줍니다.
 */
const DropDown = ({
  width = '100px',
  height = 'auto',
  options,
  mode = 'normal',
  buttonText = '추가',
  handler,
  isShow,
  setIsShow,
  onClose,
}: DropDownProps) => {
  const ref = useClickAway(() => {
    setIsShow(false);
  });

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

  const handleButtonClick = () => {
    if (handler) {
      handler(checkedItems);
    }
    setCheckedItems([]);
    onClose();
  };

  const handleItemClick = (handler: (() => void) | undefined) => {
    if (handler) {
      handler();
    }
  };

  return (
    <Wrapper $isShow={isShow}>
      <ShadowBox
        ref={ref}
        width={width}
        height={height}
        style={{
          position: 'absolute',
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
                $mode={mode}
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
