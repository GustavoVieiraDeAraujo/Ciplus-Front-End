import styled from "styled-components";

export const StyleMainMovies = styled.main`
    display: grid;
    grid-template-rows: 150px 0.9fr 2fr;
    height: 100%;
    background-color: #0B062B;
    justify-items: center;
    width: 100vw;
    

    .cla1{
        display: grid;
        grid-template-columns: auto auto auto auto;
        align-content: center;
        justify-content: center;
        justify-content: space-around;
        width: 100vw;
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
        background-color: #000;
        text-decoration: none;
    }
    a {
        text-decoration: none;
        border-radius: 10px;
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
    a{
        cursor:pointer;
    }
    .grid-item{
        width: 100vw;
    }
    a:hover{
        background-color: #0B062B;
        color: white;
        transition: 0.3s;
        cursor: pointer;
    }
    h1{
        color: white;
    }
    @media screen and (max-width: 750px){
        
    
        .cla1{
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
        width: 100vw;
        
    }

    .Frase{
        width: 100vw;
    }

    }

`