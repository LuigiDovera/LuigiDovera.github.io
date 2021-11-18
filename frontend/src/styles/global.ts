import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,700;1,300&display=swap");
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: Roboto;
  }
  body {
      font-family: 'Roboto', sans-serif;
      font-size: 12px;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased !important;
  }
  html, body, #root {
    width: 100%;
    min-height: 100vh;
    list-style: none;
    display: flex;
    overflow: auto;
  }
`;
