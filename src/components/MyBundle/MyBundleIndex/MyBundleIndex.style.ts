import styled from 'styled-components';

import { Col } from '@/styles/globalStyles';

export const Container = styled(Col)`
  padding: 1rem;
  gap: 1rem;
  word-break: break-all;
  overflow-x: hidden;
  width: 100%;
  max-height: 45rem;
  overflow-y: auto;
`;
export const Text = styled.div`
  flex-shrink: 0;
  > a {
    color: ${({ theme }) => theme.gray_300};
    font-size: 1.2rem;

    &:hover {
      color: ${({ theme }) => theme.symbol_secondary_color};
    }
  }

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
