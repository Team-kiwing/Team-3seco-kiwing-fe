import styled from 'styled-components';

export const SharedBundleDropDownWrapper = styled.div<{ $width: string }>`
  position: absolute;
  bottom: 0;
  right: ${({ $width }) => $width};
`;
