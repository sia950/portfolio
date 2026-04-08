import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* outline: 1px red solid; */
}

body {
  margin: 0;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.font};
  line-height: 1.2;
  min-width: 375px !important; 
}


a{
    text-decoration: none;
    color: ${theme.colors.font};
    cursor: pointer;
}

ul{
    list-style: none;
}

button{
    background-color: unset;
    border: none;
    cursor: pointer;
}


`