import { createGlobalStyle } from "styled-components";
import background from "../images/background.jpg";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    font-family: "Maven Pro", sans-serif;
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    line-height: 1.6;
  }

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Roboto Slab", serif;
}
`;
