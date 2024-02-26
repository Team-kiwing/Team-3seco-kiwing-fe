import { styled } from 'styled-components';

import { MOBILE } from '@/constants';

export const Container = styled.div<{ $isActive: boolean }>`
  width: 100%;
  position: relative;
  flex-direction: column;
  border-radius: 1rem;
  justify-content: center;
  border: 0.1rem solid ${(props) => props.theme.border_color};
`;

export const TitleWrapper = styled.div<{ $isActive: boolean }>`
  display: flex;
  transition: background-color 0.35s ease;
  border-radius: 1rem 1rem 0 0;

  justify-content: space-between;
  background-color: ${(props) =>
    props.$isActive ? props.theme.symbol_color : 'transparent'};
  font-size: 1.6rem;
  color: ${(props) =>
    props.$isActive
      ? props.theme.primary_white_text_color
      : props.theme.primary_color};
  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.4rem;
  }
`;

export const Header = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 90%;
`;

export const RightItem = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.2rem;
  }
`;

export const BodyWrapper = styled.div<{ $isActive: boolean }>`
  height: 0;
  padding: 0 8px;
  background-color: transparent;
  overflow: hidden;
  transition:
    height 0.5s ease,
    opacity 0.5s ease;

  @media screen and (max-width: ${MOBILE}px) {
    font-size: 1.2rem;
  }
`;

export const Body = styled.div<{ $isActive: boolean }>`
  padding: 2rem;
  font-size: 1.4rem;

  @media screen and (max-width: ${MOBILE}px) {
    padding: 1rem;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;
