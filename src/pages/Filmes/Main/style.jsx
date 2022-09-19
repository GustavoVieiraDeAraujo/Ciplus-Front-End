import styled from "styled-components";
export const StyleMain = styled.main`


display: grid;
grid-template-rows: 150px 0.9fr 2fr;
height: 1000px;
background: #000000;

.grid-item{
    
    border: 1px solid red;
    margin: 10px;
}
.cla1{
    display: grid;
    grid-template-columns: auto auto auto auto;
    align-content: center;
    justify-content: center;
    justify-content: space-around;
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
    font-size: 50px;
}

h1{
    color: white;
}















`