import { FiEdit3, FiTrash2 } from 'react-icons/fi';

import IconWrapper from '@/components/common/IconWrapper';
import Toggle from '@/components/common/Toggle';

import { Container, IconContainer } from './PcRightItem.style';
import { RightItemProps } from './PcRightItem.type';

const PcRightItem = ({ isShared, setIsShared }: RightItemProps) => {
  return (
    <Container>
      <Toggle
        on={isShared}
        onChange={() => setIsShared(!isShared)}
        isBorderShow={true}
        isContentShow={true}
        width="7rem"
        height="2.5rem"
        fontSize="1.2rem"
        style={{ marginTop: '0.5rem' }}
      />
      <IconContainer>
        <IconWrapper
          $size={3.5}
          $isBackground={true}
        >
          <FiEdit3 />
        </IconWrapper>
        <IconWrapper
          $size={3.5}
          $isBackground={true}
        >
          <FiTrash2 />
        </IconWrapper>
      </IconContainer>
    </Container>
  );
};
export default PcRightItem;
