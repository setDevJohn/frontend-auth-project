import styled from "styled-components";

type TInputEntrie = {
  $error: boolean;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputLabel = styled.label`
  font-family: "Poppins", serif;
  font-size: 1.4rem;
  margin-bottom: -4px;
`;
export const InputEntrie = styled.input<TInputEntrie>`
  color: #6d6b6b;
  font-family: "Poppins", serif;
  font-size: 1.4rem;
  border: none;
  border-bottom: ${({$error}) => `2px solid ${$error ? '#f00' : '#9d9d9d'}`};
  border-radius: 3px;
  padding: 5px 7px 4px 10px;
  
  &:focus {
    outline: none;
  }
`;