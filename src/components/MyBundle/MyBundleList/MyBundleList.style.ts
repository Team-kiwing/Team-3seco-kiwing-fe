import styled from 'styled-components';

export const Container = styled.div<{ $isMobileSize: boolean }>`
  width: ${({ $isMobileSize }) => ($isMobileSize ? '100%' : '20%')};
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  gap: 1.5rem;
`;

export const BundleWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
