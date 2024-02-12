import styled from 'styled-components';

import { Base } from './Base';
import { PropsCircleSkeleton } from './Skeleton.type';

export const Circle = styled(Base)<PropsCircleSkeleton>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
`;
