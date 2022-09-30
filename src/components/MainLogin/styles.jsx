import styled from "styled-components";

export const StyleMainLogin = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    background-color: #0B062B;
    width: 100vw;
    height: 100vh;
    justify-items: center;
    align-items: center;
    background-image: url();
    background-size: cover;


    .grid-item {
        color: white;
        display: grid;
        grid-auto-rows: min-content;
        gap: 10px;
        background: rgba(0, 0, 0, 0.778);
        width: 450px;
        min-height: 400px;
        padding: 15px 0;
        border: black solid;
        align-items: center;
        text-align: center;
        border-radius: 10px;
        border: 0;
    }

    .resetSenha {
        display: grid;
        gap: 8px;
        width: 90%;
        justify-self: center;
    }

    .resetSenha input {
        height: 35px;
        border-radius: 5px;
        border: none;
        text-align: center;
        background-color: #444343;
        color: white;
    }

    .resetSenha button {
        height: 35px;
        border-radius: 5px;
        border: none;
        background-color: #13678a;
        color: white;
        cursor: pointer;
        font-size: 16px;
    }

    .resetSenha .sucesso {
        color: #6bff8f;
        font-size: 14px;
    }

    .resetSenha .erro {
        font-size: 14px;
    }

    .divs{
        width: 100%;
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }


    button {
        font-size: 25px;
    }

    h1 {
        text-align: center;
        color: white;
        font-size: 35px;
    }


    label {
        color: white;
    }

    .erro {
        color: #ff6b6b;
        font-size: 15px;
    }

    @media screen and (max-width: 600px){
        
        .grid-container{
            width: auto;
        }

        .grid-item{
            width: 90%;
            height: 60%;
            gap:2px
            
        }
    }
`




