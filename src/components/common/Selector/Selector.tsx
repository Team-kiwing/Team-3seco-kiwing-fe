import { useState } from 'react';

import {
  FirstContent,
  SecondContent,
  SelectStick,
  SelectWrapper,
} from './Selector.style';
import { SelectorProps } from './Selector.type';

const Selector = ({
  content,
  size = 1.7,
  onSelected,
  ...props
}: SelectorProps) => {
  const [isTrue, setIsTrue] = useState(true);

  const handleSelected = (item: boolean) => {
    setIsTrue(item);
    onSelected(item);
  };
  return (
    <>
      <SelectWrapper {...props}>
        <FirstContent
          $size={size}
          isSelected={isTrue}
          onClick={() => handleSelected(true)}
        >
          {content[0]}
        </FirstContent>
        <SelectStick $size={size} />
        <SecondContent
          $size={size}
          isSelected={isTrue}
          onClick={() => handleSelected(false)}
        >
          {content[1]}
        </SecondContent>
      </SelectWrapper>
    </>
  );
};

export default Selector;
