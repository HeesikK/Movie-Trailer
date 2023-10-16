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
    background-color: #fff;
    overflow-x: hidden;
  }
  button {
    border: none;
  }
`;

export default GlobalStyles;
