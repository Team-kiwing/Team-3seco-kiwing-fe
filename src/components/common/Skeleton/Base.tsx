import styled from 'styled-components';

export const Base = styled.div`
  border-radius: 4px;
  background: linear-gradient(90deg, #dfe3e8 0px, #efefef 30px, #dfe3e8 80px) 0%
    center / 200% 100%;
  animation:
    skeleton--zoom-in 0.5s ease-out,
    skeleton--loading 2s infinite linear,
    skeleton--wave 2s infinite;

  @keyframes skeleton--zoom-in {
    0% {
      opacity: 0;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes skeleton--loading {
    0% {
      background-position-x: 100%;
    }
    50% {
      background-position-x: -100%;
    }
    100% {
      background-position-x: -100%;
    }
  }

  @keyframes skeleton--wave {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
