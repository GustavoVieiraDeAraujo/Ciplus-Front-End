import styled from "styled-components";

export const StyleCardPlan = styled.div`
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

    h2{
        margin-top: 10px;
        font-size: 20px;
    }
    .benefits{
        width: 80%;
        
    }
   button{
    border-radius: 10px;
    width: 70%;
    margin-bottom: 10px;
   }

`