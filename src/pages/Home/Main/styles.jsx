import styled from "styled-components";
export const StyleMain = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap%27');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap%27');

/* RESET CSS, RESETANDO OS VALORES PARA ESTILIZAR MANUALMENTE */

*{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* ESTILIZAÇÃO DA MAIN */

display: grid;
grid-template-rows: 2fr 1fr 1fr 1fr 1fr 0.5fr;
height: 3200px;
background: #000000;

.fotoCa{
    background-image: url("https://wallpaperaccess.com/full/1354791.jpg");
    background-size: cover;
    background-position-y: -200px;
}

.grid-item{
    margin-top: 10px;
    text-align: center;
    color: white;
}
.item1{
    align-items: center;
    display: grid;
    grid-template-columns: auto auto;
    margin: 20px;
    padding-left: 100px;
    padding-right: 100px;
}
.item2{
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 20px;
}
.Cards{
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-template-rows: 350px;
    column-gap: 10px;
    margin: 10px;
}
.ExpC{
    display: grid;
    grid-template-columns: 1fr;

    text-align: center;
    font-size: 30px;
    color: white;
    align-items: center;
}
.corpoC {
    background-color: #0B062B;
    border-radius: 10px;
}
.dimensoes{
    margin-top: 50px;
    height: 650px;
    width: 400px;
    padding-right: 50px;
}
.dimensoes2{
    height: 650px;
    width: 700px;
}

.enfatiza{
    font-size: 50px;
}
.FraEf{
    font-size: 35px;
}

.Fp{
    align-items: center;
    text-align: center;
    display: grid;
    grid-template-rows: 1fr 1fr;
}
.TesteInp{
    text-align: center;
    height: 40px;
    width: 600px;
    border-radius: 5px 0px 0px 5px;
    background-color: #BBABAB;
}
.Vl{
    color: white;
    width: 200px;
    height: 40px;
    border-radius: 0px 5px 5px 0px;
    background-color: #0B062B;
   
}
.enfatizaUP{
    font-size: 30px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
}

h1{
    font-family: 'Inter', sans-serif;
}
.fSize{
    font-family: 'Inter', sans-serif;
    font-size: 27px;
}

`    




