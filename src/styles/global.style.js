import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  // reset.css
  ${reset}
  * {
    box-sizing: border-box;
    list-style: none;
    color: black;
  }

  body {
    /* background-color: #4d5eb3; */
    background-color: #1c2645;
    /* overflow-x: hidden; */
  }
  button {
    border: none;
  }
`;

export default GlobalStyles;
