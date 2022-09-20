import styled from "styled-components";

export const StyleHeader = styled.header`
    @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap%27');

    display: grid;  
    height: 100px;
    background-color: #0B062B;
    grid-template-columns: auto auto auto;

    .grid-item{
        margin: 10px;
    }

    .alinha1{
        display: grid;
        grid-template-columns: auto auto;
        margin-left: 400px;
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
        margin-left: 100px;
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
`
