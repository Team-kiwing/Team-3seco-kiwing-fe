import styled from 'styled-components';

import { Base } from './Base';
import { PropsBoxSkeleton } from './Skeleton.type';

export const Box = styled(Base)<PropsBoxSkeleton>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  border-radius: ${({ $borderRadius }) => $borderRadius};
`;
