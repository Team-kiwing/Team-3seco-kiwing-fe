import styled from 'styled-components';
export const Container = styled.div<{ $isActive: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: fit-content;
  padding: 1rem;
  background-color: ${(props) =>
    props.$isActive ? props.theme.symbol_color : props.theme.background_color};
  border: 0.1rem solid
    ${(props) =>
      props.$isActive ? props.theme.symbol_color : props.theme.border_color};

  border-radius: ${(props) => (props.$isActive ? '1rem 1rem 0 0' : '1rem')};
  font-size: 1.6rem;
  color: ${(props) =>
    props.$isActive ? props.theme.primary_color : props.theme.secondary_color};
  cursor: pointer;
`;

export const Title = styled.span`
  width: 85%;
`;

export const RightItem = styled.div`
  width: 10%;
`;

export const Body = styled.div<{ $isActive: boolean }>`
  width: 100%;
  height: ${(props) => (props.$isActive ? 'fit-content' : 0)};
  padding: 1rem;
  background-color: ${(props) => props.theme.background_color};
  border: 0.1rem solid ${(props) => props.theme.border_color};

  border-top: none;
  border-radius: 0 0 1rem 1rem;
  font-size: 1.6rem;
  color: ${(props) => props.theme.primary_color};
`;
