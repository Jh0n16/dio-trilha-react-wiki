import styled from "styled-components";

export const ButtonContainer = styled.div`
    background-color: #fafafa; 
    border: 1px solid #fafafa; 
    border-radius: 20px;

    color: #22272e;

    height: 62px;
    width: 10%;

    margin: 20px 0;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 0.8;
        cursor: pointer;
    }
`