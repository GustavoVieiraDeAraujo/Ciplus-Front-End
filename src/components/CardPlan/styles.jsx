import styled from "styled-components";

export const StyleCardPlan = styled.label`
    display: grid;
    grid-template-rows: repeat(4, auto);
    color: white;
    font-family: 'Inter', sans-serif;
    background-color: #0B062B;
    border-radius: 10px;
    text-align: start;
    justify-items: center;
    height: 100%;
    margin: 10px;
    cursor: pointer;

    :hover{
        border: solid 1px white;
        cursor: pointer;
        transition: 0.1s;
    }

    h2{
        margin-top: 10px;
        font-size: 20px;
    }

    .benefits{
        width: 80%;
        
    }
`