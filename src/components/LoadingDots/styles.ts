import styled, { keyframes } from 'styled-components';

const wave = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

type TLoadingContainer = {
  $gap?: number;
};
type TDot = {
  $size: number;
  $color: string;
  $index: number;
};

export const LoadingContainer = styled.div<TLoadingContainer>`
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => $gap || 6}px;
`;

export const Dot = styled.div<TDot>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background-color: ${({ $color }) => $color};
  border-radius: 50%;
  animation: ${wave} 1.2s ease-in-out infinite;
  animation-delay: ${({ $index }) => $index * 0.15}s;
`;