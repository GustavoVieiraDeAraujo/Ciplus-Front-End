import styled from "styled-components";

export const StyleMainMovies = styled.main`
    display: grid;
    grid-template-rows: 150px 0.9fr 2fr;
    height: 1000px;
    background-color: #0B062B;
    justify-items: center;
    .grid-item{
        
      margin: 10px;
    }

    .cla1{
        display: grid;
        grid-template-columns: auto auto auto auto;
        align-content: center;
        justify-content: center;
        justify-content: space-around;
        width: 100%;
        background: #000000;

    }

    .button{
        display: grid;
        align-content: center;
        justify-content: center;
        border-radius: 10px;
        font-size: 25px;
        width: 200px;
        height: 50px;
        color: white;
    }

    .Frase{
        display: grid;
        align-content: center;
        justify-content: center;
        text-align: center;
        color: white;
        width: 100%;
        font-size: 50px;
        background-color: #0B062B;
    }
    a:hover{
        background-color: white;
        color: black;
        transition: 0.3s;
    }
    h1{
        color: white;
    }

`