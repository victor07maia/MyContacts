import { css } from "styled-components";
import styled  from "styled-components";

export default styled.button`
    height: 50px;
    border: none;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 0px 16px;
    transition: backgroud 0.2s ease-in ;

    &:hover{
        background: ${({ theme }) => theme.colors.primary.light};
    }
    &:active{
        background: ${({ theme }) => theme.colors.primary.dark};
    }
    &:disabled{
        background: #cccccc;
        cursor: not-allowed;
    }

 ${({theme, danger}) => danger && css`
    background: ${({ theme }) => theme.colors.danger.main};
    &:hover{
        background: ${theme.colors.danger.light};
    }
    &:active{
        background: ${theme.colors.danger.dark};
    }

    `
};
`;
