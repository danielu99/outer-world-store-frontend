// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Orbitron', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #0a0a0a; /* Darker for contrast */
    color: #e0e0e0; /* Softer white for text */
  }
  
  * {
    box-sizing: border-box;
  }

  h1, h2, h3 {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #b8b8b8; /* Softer gray instead of bright white */
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    color: #c0c0c0; /* Softer gray text */
  }
`;

export default GlobalStyles;
