import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: ${({ theme }) => theme.primaryFont};
    font-size: 62.5%;
  }

  .custom-toast {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.darkTextColor};
  }
`;