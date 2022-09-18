import styled from "styled-components";
export const StyleMainPlanos = styled.main`

display: grid;
grid-template-rows:  500px 200px 500px;
height: 1200px;
background: #000000;

.banner{
   width: 100%;
}

.botoes{
    width: 300px;
    height: 60px;
    margin-top: -50px;
    position: absolute;
    left: 500px;
    background: #0B062B;
    border-radius: 7px;
    color: white;
    font-family: 'Inter';
    font-size: 20px;
    align-items: center;
}

.Cards{
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: 350px;
    column-gap: 10px;
    margin: 10px;
    color: white;
    font-family: 'Inter', sans-serif;
}

h1{
    position: relative;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    color: #FFFFFF;
    margin-bottom:20px;
    margin-left: auto;
    margin-right:auto;
    margin-top:-50px;
    width: 16em;
}

ul{
    position: relative;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #FFFFFF;
    margin-left: auto;
    margin-right:auto;
    width: 30em;
    line-height:40px;
    font-size: 15px;
}
.corpoC {
    background-color: #0B062B;
    border-radius: 10px;
}

.corAzul{
    color: #2F12A5;
}
`