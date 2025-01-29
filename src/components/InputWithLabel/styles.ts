import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InputLabel = styled.label`
  font-family: "Poppins", serif;
  font-size: 1.4rem;
  margin-bottom: -4px;
`;
export const InputEntrie = styled.input`
  color: #6d6b6b;
  font-family: "Poppins", serif;
  font-size: 1.4rem;
  border: none;
  border-bottom: 2px solid #9d9d9d;
  border-radius: 3px;
  padding: 5px 7px 4px 10px;
  
  &:focus {
    outline: none;
  }
`;