import styled, { css } from 'styled-components';

import { FONT_SEMI_BOLD, MOBILE_MIN } from '@/constants';

import { PropsStyledBadge } from './Badge.type';

const sizeMapping = {
  xxs: '0.8rem',
  xs: '1.1rem',
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
  hot: css`
    font-weight: ${FONT_SEMI_BOLD};
    background-color: ${({ theme }) => theme.hotBadge_background_color};
    color: ${({ theme }) => theme.hotBadge_color};
  `,
  hashTag: css`
    background-color: transparent;
    color: ${({ theme }) => theme.gray_300};
    cursor: default;
  `,
  subscribedTag: css`
    display: flex;
    gap: 0.1rem;
    align-items: center;
    font-weight: ${FONT_SEMI_BOLD};
    background-color: ${({ theme }) => theme.subscribed_background_color};
    color: ${({ theme }) => theme.subscribed_color};
    cursor: default;
  `,
};

export const StyledBadge = styled.span<PropsStyledBadge>`
  display: inline-block;
  border-radius: 3rem;
  padding: 0.75rem 1.25rem;
  width: fit-content;
  margin: ${({ $margin }) => $margin};
  cursor: pointer;
  transition: background-color 0.5s ease;
  font-size: ${({ $size }) =>
    typeof $size === 'number' ? `${$size}rem` : sizeMapping[$size] || '1.8rem'};
  -webkit-tap-highlight-color: transparent;
  ${({ $state }) => {
    return stateStyles[$state];
  }}

  @media screen and (max-width: ${MOBILE_MIN}px) {
    font-size: ${sizeMapping['xs']};
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${({ $isHover }) => $isHover && stateStyles.focus}
    }
  }
`;
