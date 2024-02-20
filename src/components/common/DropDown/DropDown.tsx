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
