import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
export const InputLabel = styled.label`
  font-size: 1.4rem;
`;
export const InputEntrie = styled.input`
  padding: 3px 7px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.5rem;
  
  
  &:focus {
    outline: none;
  }
`;