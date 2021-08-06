import { createGlobalStyle } from "styled-components";




const GlobalStyle = createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        font-family: 'sora', sans-serif;
    }
    body{
        background: ${(props) => props.theme.colors.background};
        color: ${({ theme}) => theme.colors.gray.primary};; ;
        font-size: 16px;
    }
    button{
        cursor: pointer;
    }

`;

export default GlobalStyle;
