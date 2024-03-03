import styled from 'styled-components';

//MyBundleList
export const Container = styled.div<{ $isMobileSize: boolean }>`
  width: ${({ $isMobileSize }) => ($isMobileSize ? '100%' : '20%')};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.5rem;
`;

export const BundleWrapper = styled.div<{ $isMobileSize: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 5rem);
  gap: ${({ $isMobileSize }) => ($isMobileSize ? '1rem' : '2rem')};
  overflow-x: hidden;
  overflow-y: auto;
`;

//AddBundleModal
export const ModalContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
