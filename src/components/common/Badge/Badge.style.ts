import styled, { css } from 'styled-components';

import { PropsStyledBadge } from './Badge.type';

const sizeMapping = {
  s: '1.4rem',
  m: '1.8rem',
  l: '2.2rem',
};

const stateStyles = {
  basic: css`
    background-color: ${({ theme }) => theme.gray_100};
    color: white;
  `,
  focus: css`
    background-color: ${({ theme }) => theme.symbol_color};
    color: white;
  `,
  hashTag: css`
    background-color: white;
    color: ${({ theme }) => theme.gray_300};
  `,
};

export const StyledBadge = styled.span<PropsStyledBadge>`
  display: inline-block;
  border-radius: 3rem;
  padding: 0.75rem 1.25rem;
  width: fit-content;
  cursor: pointer;
  transition: background-color 0.5s ease;
  font-size: ${({ $size }) =>
    typeof $size === 'number' ? `${$size}rem` : sizeMapping[$size] || '1.8rem'};
  -webkit-tap-highlight-color: transparent;
  ${({ $state }) => {
    return stateStyles[$state];
  }}

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${({ $isHover }) => $isHover && stateStyles.focus}
    }
  }
`;
