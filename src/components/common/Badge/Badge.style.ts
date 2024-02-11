import styled, { css } from 'styled-components';

import { PropsBadge } from './Badge.type';

const sizeMapping = {
  s: ' 0.4rem',
  m: '0.7rem',
  l: '1rem',
};

const stateStyles = {
  basic: css`
    background-color: #d9d9d9;
    color: #ffffff;
  `,
  focus: css`
    background-color: #48da79;
    color: #ffffff;
  `,
  hot: css`
    background-color: #f7cece;
    color: #f23030;
  `,
};

export const StyledBadge = styled.span<PropsBadge>`
  display: inline-block;
  border-radius: 3rem;
  padding: 0.25rem 0.5rem;
  width: fit-content;
  cursor: pointer;

  font-size: ${({ $size }) =>
    typeof $size === 'number' ? `${$size}rem` : sizeMapping[$size] || '0.7rem'};

  ${({ $state, $isActive }) => {
    if ($state === 'basic' && !$isActive) {
      return stateStyles.basic;
    } else if ($state === 'focus') {
      return stateStyles.focus;
    } else if ($state === 'hot') {
      return stateStyles.hot;
    }
    return '';
  }}

  &:hover {
    ${({ $hover }) => $hover && stateStyles.focus}
  }
`;
