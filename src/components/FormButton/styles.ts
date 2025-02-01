import styled from 'styled-components';

type TButton = {
  $loading: boolean;
}

export const ButtonContainer = styled.div`
  position: relative;
  margin: 0 auto;
`;
export const Button = styled.input<TButton>`
  background-color: #5151A2;
  color: #fff;
  font-family: "Poppins", serif;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin: 15px auto 0 auto;
  width: 100%;
  min-width: 243px;
  transition: all ease 0.1s;
  cursor: ${({ $loading }) => $loading ? 'progress' : 'pointer'};
  opacity: ${({ $loading }) => $loading ? 0.8 : 1};

  &:active {
    transform: ${({ $loading }) => !$loading && 'scale(0.97)'};
  }
`;
export const Loading = styled.div`
  position: absolute;
  bottom: 1px;
  left: 2px;
  height: 4px;
  width: 98%;
`;