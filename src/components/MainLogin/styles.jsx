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
        grid-template-rows: 0.5fr 0.5fr 0.3fr 0.3fr 0.5fr;
        gap: 5px;
        background: rgba(0, 0, 0, 0.778);
        width: 450px;
        height: 400px;
        border: black solid;
        align-items: center;
        text-align: center;
        border-radius: 10px;
        border: 0;
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




