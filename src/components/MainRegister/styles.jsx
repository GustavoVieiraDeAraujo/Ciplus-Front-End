import styled from "styled-components";

export const StyleMainRegister = styled.main`  
    display: grid;
    grid-template-columns: 1fr;
    background-color: #0B062B;
    width: 100vw;
    height: 100vh;
    justify-items: center;
    align-items: center;
    background-size: cover;
    background-image: url(./assets/netflix.jpg);

    .grid-item {
        display: grid;
        background: rgba(0, 0, 0, 0.778);
        width: 500px;
        height: auto;
        margin: 60px;
        border: black solid;
        align-items: center;
        justify-items: center;
        border-radius: 10px;
        border: 0;
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

    @media screen and (max-width: 600px){
        .grid-item {
        width: auto;
        height: auto;
        margin: 10px;
        }

    }
`




