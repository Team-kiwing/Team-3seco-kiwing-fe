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
  > a {
    color: ${({ theme }) => theme.gray_300};
    font-size: 1.2rem;

    &:hover {
      color: ${({ theme }) => theme.symbol_secondary_color};
    }
    > span {
    }
  }
  // white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  //width: 90%;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
