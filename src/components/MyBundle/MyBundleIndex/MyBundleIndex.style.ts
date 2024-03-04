import styled from 'styled-components';

import { Col } from '@/styles/globalStyles';

export const Container = styled(Col)`
  padding: 1rem;
  gap: 1rem;
  word-break: break-all;
  overflow-x: hidden;
  overflow-y: auto;
`;
export const Text = styled.div`
  color: ${({ theme }) => theme.gray_300};
  font-size: 1.2rem;
  cursor: pointer;
`;
