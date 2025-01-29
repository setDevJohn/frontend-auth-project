import styled from "styled-components";

export const Button = styled.input`
  background-color: #5151A2;
  color: #fff;
  font-family: "Poppins", serif;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  margin-top: 15px;
  cursor: pointer;
  transition: all ease 0.2s ;

  &:active {
    transform: scale(0.97);
  }
`;