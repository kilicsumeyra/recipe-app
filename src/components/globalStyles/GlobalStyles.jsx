import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: "Sedan", serif;
}
body {
    font-size: 1.2rem;
    background:${({theme})=> theme.colors.mainColor}
}
`;