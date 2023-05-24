import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=League+Spartan&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    a{
        color: unset;
        text-decoration: none;
    }
    ul, ol, li{
        list-style: none;
    }
    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input, label{
        font-family: 'League Spartan', sans-serif;
    }
    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    } 

    :root{
        --white-1:#FFFFFF;
        --white-2: #EFFAFA;
        --green-1: #5CA5A5;
        --green-2:#F2B3939;
        --grey-1: #7C8F8F;
        --grey-2: #2B3939;

        --title-size: 3.125rem;
        --title2-size: 1.375rem;
        --title3-size: 1.125rem;
        --headLine-size: 1.563rem;
        --headLine2-size: 1.25rem;
        --headLine3-size: 0.938rem;

        --extra-bold-weight: 800;
        --bold-weight: 700;
        --semi-bold-weight: 600;
        --medim-weight: 500;

        font-size: 60%;

    }

    @media (min-width: 700px) {
        :root{
            font-size: 62.5%;
        }
    }
`;