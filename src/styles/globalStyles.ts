import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    /* font-family: "Poppins", serif; */
    font-family: "Montserrat", serif;
    font-size: 62.5%;
  }
`