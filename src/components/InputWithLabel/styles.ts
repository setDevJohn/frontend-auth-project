import styled from 'styled-components';

type TInputEntrie = {
  $error: boolean;
}

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;
export const InputLabel = styled.label`
  position: absolute;
  top: 7px;
  left: 15px;
  color: #494949;
  font-family: "Poppins", serif;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  pointer-events: none;
`;
export const InputEntrie = styled.input<TInputEntrie>`
  color: #2f2f2f;
  font-family: "Poppins", serif;
  font-size: 1.3rem;
  border: ${({ $error }) => `2px solid ${$error ? '#f00' : '#c3c3c3'}`};
  border-radius: 4px;
  padding: 5px 7px 4px 13px;
  width: 100%;
  max-width: 243px;
  
  &:focus {
    outline: none;
  }
  &:focus + label,
  &:not([value=""]) + label {
    top: -9px;
    left: 10px;
    background-color: #fff;
    font-size: 1.2rem;
    padding: 0 5px;
  }
`;