import styled, { createGlobalStyle } from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        font-size: 32px;
        color: #fafafa;
    }
    
    p {
        font-size: 16px;
        color: #fafafa60;

        margin-bottom: 10px;
    }

    hr {
        color: #fafafa60;
        margin: 20px 0;
    }

    .remover {
        color: #ff1111;
        text-decoration: none;

        margin: 20px
        
    }

    .remover:hover {
        opacity: 0.8;
        text-decoration: underline;
    }

    .ver-repositorio {
        color: #4444ff;
        text-decoration: none;

    }

    .ver-repositorio:hover {
        opacity: 0.8;
        text-decoration: underline;
    }
`