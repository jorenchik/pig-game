import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    height: 100vh;
    color: #333;
    background-image: linear-gradient(to top left, #753682 0%, #bf2e34 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .App {
    position: relative;
    width: 100rem;
    height: 60rem;
    background-color: rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(200px);
    filter: blur();
    box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    overflow: hidden;
    display: flex;
  }
`;
