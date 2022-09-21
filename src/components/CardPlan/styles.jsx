import styled from "styled-components";

export const StyleCardPlan = styled.label`
    display: grid;
    grid-template-rows: repeat(4, auto);
    height: auto;
    margin: 10px;
    color: white;
    font-family: 'Inter', sans-serif;
    background-color: #0B062B;
    border-radius: 10px;
    text-align: start;
    justify-items: center;

    :hover{
        border: solid 2px white;
        cursor: pointer;
    }
    

    h2{
        margin-top: 10px;
        font-size: 20px;
    }

    .benefits{
        width: 80%;
        
    }
`