import styled from 'styled-components';

type LoadingContainerProps = {
  $bgColor: string | undefined
}

const LoadingContainer = styled.div<LoadingContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $bgColor }) => $bgColor};
  width: 100%;
  height: 100%;
`;

export { LoadingContainer };