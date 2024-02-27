import { FiEdit3, FiTrash2 } from 'react-icons/fi';
import { useTheme } from 'styled-components';

import IconWrapper from '@/components/common/IconWrapper';
import Toggle from '@/components/common/Toggle';

import { Container, IconContainer } from './PcRightItem.style';
import { RightItemProps } from './PcRightItem.type';

const RightItem = ({ isShared, setIsShared }: RightItemProps) => {
  const theme = useTheme();

  return (
    <Container>
      <Toggle
        on={isShared}
        onChange={() => setIsShared(!isShared)}
        isBorderShow={true}
      />
      <IconContainer>
        <IconWrapper
          $size={'xs'}
          $hoverIconColor={theme.symbol_secondary_color}
        >
          <FiEdit3 />
        </IconWrapper>
        <IconWrapper
          $size={'xs'}
          $hoverIconColor={theme.symbol_secondary_color}
        >
          <FiTrash2 />
        </IconWrapper>
      </IconContainer>
    </Container>
  );
};
export default RightItem;
