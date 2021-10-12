import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html,
  body {
    margin: 0;
    padding: 0;
  }
  html {
    margin: 0;  
    background-color: #A3CACC;
  }
`;

export default GlobalStyle;
