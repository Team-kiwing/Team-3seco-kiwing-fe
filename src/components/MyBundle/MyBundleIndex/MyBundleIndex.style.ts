import styled from 'styled-components';

import { Col } from '@/styles/globalStyles';

export const Container = styled(Col)`
  padding: 1rem;
  gap: 1rem;
  word-break: break-all;
  width: 100%;

  div:last-child {
    padding-bottom: 1.5rem;
  }
`;

export const TextContainer = styled(Col)`
  justify-content: center;
  align-items: center;
`;

export const EmptyText = styled.span`
  color: ${({ theme }) => theme.gray_300};
  font-size: 1.2rem;
`;

export const Text = styled.div`
  flex-shrink: 0;
  > a {
    color: ${({ theme }) => theme.gray_300};
    font-size: 1.2rem;
    text-decoration-line: none;

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
