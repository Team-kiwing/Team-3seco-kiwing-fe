import { useState } from 'react';

import { Col } from '@/styles/globalStyles';

import Button from '../Button';
import ShadowBox from '../ShadowBox';
import useClickAway from './DropDown.hook';
import {
  Body,
  CheckBoxInput,
  Footer,
  Item,
  Options,
  Title,
  Wrapper,
} from './DropDown.style';
import { DropDownProps } from './DropDown.type';

/**
 * @summary DropDown 레이아웃 컴포넌트입니다.
 * @param width px, rem, % 커스텀 가능
 * @param height px, rem, % 커스텀 가능
 * @param options id,title,body,rightItem,handler을 갖고있는 option타입 배열입니다.
 * title(필수): 핵심 Text, body(선택): title 아래 보조 Text
 * rightItem(선택): 오른쪽에 들어갈 Item, handler(선택): 각 Item 클릭 시 호출할 handler 함수
 * @param mode 'normal', 'checkbox' 2가지 모드가 있습니다.
 * [normal]: option 1개만 선택
 * [checkbox]: option 여러개 선택
 * @param onAdd [checkbox] 모드 전용. button handler로 사용됩니다.
 * @param isShow 외부에서 DropDown의 가시화 유무를 결정하는 상태값. setIsShow와 함께 넘겨줍니다.
 * @param setIsShow isShow상태값을 set하는 함수
 * @param triggerId 드롭다운 컴포넌트가 isShow=true가 되도록 해주는 HTMLElement의 id
 * 사용 예시) <Button id='drowdown-btn' ... /> // 클릭 시 setIsShow(true) 해주는 버튼에 id 부여
 * <DropDown triggerId='dropdown-btn' ... /> // 위에서 부여한 id 값 전달
 */
const DropDown = ({
  width = '100px',
  height = 'auto',
  options,
  mode = 'normal',
  onAdd,
  isShow,
  setIsShow,
  closeDropDown,
  direction,
}: DropDownProps) => {
  const ref = useClickAway((e: Event) => {
    closeDropDown(e);
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

  const handleAddClick = () => {
    if (onAdd) {
      onAdd(checkedItems);
    }
    setCheckedItems([]);
    setIsShow(false);
  };

  const handleItemClick = (handler: (() => void) | undefined) => {
    if (handler) {
      handler();
    }
  };

  return (
    <Wrapper
      ref={ref}
      $isShow={isShow}
      $direction={direction}
      $width={width}
      $height={height}
    >
      <ShadowBox
        width={width}
        height={height}
        className="dropdown"
      >
        <Options $mode={mode}>
          {options.map((option) => (
            <Item
              key={option.id}
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
        {mode === 'checkbox' && (
          <Footer>
            <Button
              height="fit-content"
              style={{ padding: '0.5rem' }}
              text="추가"
              onClick={handleAddClick}
            />
          </Footer>
        )}
      </ShadowBox>
    </Wrapper>
  );
};

export default DropDown;
