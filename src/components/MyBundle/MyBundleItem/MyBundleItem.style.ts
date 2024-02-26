import styled from 'styled-components';

export const Title = styled.span<{ $isMobileSize: boolean }>`
  width: ${(props) => (props.$isMobileSize ? '90%' : '100%')};
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
`;

export const RightItem = styled.div`
  width: 10%;
`;
