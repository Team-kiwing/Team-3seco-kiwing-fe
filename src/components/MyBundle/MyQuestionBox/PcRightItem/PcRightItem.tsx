import { FiEdit3, FiTrash2 } from 'react-icons/fi';

import IconWrapper from '@/components/common/IconWrapper';
import Toggle from '@/components/common/Toggle';

import { Container, IconContainer } from './PcRightItem.style';
import { RightItemProps } from './PcRightItem.type';

const RightItem = ({ isShared, setIsShared }: RightItemProps) => {
  return (
    <Container>
      <Toggle
        on={isShared}
        onChange={() => setIsShared(!isShared)}
        isBorderShow={true}
        width="4rem"
        height="1.5rem"
        style={{ marginTop: '0.5rem' }}
      />
      <IconContainer>
        <IconWrapper
          $size={'s'}
          $isBackground={true}
        >
          <FiEdit3 />
        </IconWrapper>
        <IconWrapper
          $size={'s'}
          $isBackground={true}
        >
          <FiTrash2 />
        </IconWrapper>
      </IconContainer>
    </Container>
  );
};
export default RightItem;
