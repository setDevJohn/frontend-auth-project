import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(.8)
  }
  to {
    opacity: 1;
    transform: scale(1)
  }
`;