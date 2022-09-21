import styled from "styled-components";

export const StyleHeader = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap%27');

    display: grid;  
    height: 100px;
    background-color: #0B062B;
    grid-template-columns: auto 10px auto;
    width: 100%;

    .grid-item{
        margin: 10px;
    }

    .alinha1{
        display: grid;
        grid-template-columns: auto auto auto;
        justify-content: space-around;
    }

    .botoes{
    width: 200px;
    height: 50px;
    border-radius: 10px;
    margin-top: 15px;
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    cursor: pointer;
    }

    .bNeutro{
        background-color: #0B062B;
        margin-left: 10px;
    }

    .bColored{
    background-color:  #13678A;
    }

    .cineLogo{
        width: 150px;
        height: 50px;
        margin-top: 15px;
        margin-left: 10px;
    }
    @media screen and (max-width: 750px){
        grid-template-columns: 40% 0 50%;
        gap: 3px;
        .link{
            width: 100%;
            height: 100%;
            display: grid;
            align-items: center;
            justify-items: center;
            text-decoration: none;
        }
        .botoes{
            width: 100%;
            height: 100%;
            margin: 0 0 0 0;
        }
        .grid-item{
            width: auto;

        }
        .alinha1{
            margin-top: 0;
            display: grid;
            width: 100%;
            height: 100%;
            grid-template-columns: auto;
            grid-template-rows: auto auto auto;
            align-items: center;
            justify-items: center;
            }
           
    }
    @media screen and (max-width: 500px){
        .cineLogo{
            width: 110px;
        }
    }



`
