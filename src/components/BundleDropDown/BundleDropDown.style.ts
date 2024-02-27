import styled from 'styled-components';

export const BundleDropDownWrapper = styled.div<{ $width: string }>`
  position: absolute;
  bottom: 0;
  right: ${({ $width }) => $width};
`;
