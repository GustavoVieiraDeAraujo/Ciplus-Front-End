import styled from "styled-components";
export const StyleMain = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap%27');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100&display=swap%27');

/* RESET CSS, RESETANDO OS VALORES PARA ESTILIZAR MANUALMENTE */

/* ESTILIZAÇÃO DA MAIN */

display: grid;
grid-template-rows: 1.3fr 1fr 0.2fr 1fr 0.2fr 0.5fr 0.5fr 0.2fr;
width: auto;
height: 3200px;
background: #000000;

.fotoCa{
    width: 100%;
    margin: 0 0 0 0;
    background-color: yellow;
}
.FotoFundo{
    width: 100%;
    height: 100%;

}

.grid-item{
    margin-top: 0px;
    text-align: center;
    color: white;
}
.item1{
    align-items: center;
    display: grid;
    grid-template-columns: auto auto;

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

.imgIngresso{
    position: absolute;
    width: 150px;
    height: 150px;
}
.imgPipoca{
    width: 150px;
    height: 150px;
    position: absolute;
    margin-top: -90px;
}
.divDaImg1{

    display: grid;
    justify-items: end;
    
}
.divDaImg2{

    display: grid;
    justify-items: start;
    
}

@media screen and (max-width: 990px){
    .imgIngresso{
        margin-top: 60px;
    }
    .Cards{
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
    }
    .corpoC{
        width: auto;
        height: 300px;
        margin-top: 10px;
    }
    .dimensoes{
        width: 70%;
        height: 100%;
        padding-left: 20px;
        margin-top: 0;
    }
   .dimensoes2{
        width: 100%;
        height: 100%;
        margin: 0;
        padding-right: 0;
    }
.item1{

    height: 400px;
    align-items: center;
    justify-items: center;
    margin-left: 40px;
}
.item2{
    grid-template-columns: auto auto;
    align-items: center;
    justify-items: center;
    gap: 0;
    justify-items: center;

}
    .grid-item{
        width: auto;
    }
    .fotoCa{
        width:auto;
        height: auto;
        background-size: cover;
        background-repeat: no-repeat;
    }
    
    .enfatizaUP{
        width: auto;
        height:auto;
        display: grid;
        grid-template-rows: 30% 30%;
        gap: 5px;
        font-size: 100%;
    }
    .enfatiza{
        font-size: 30px;
        width: 100%
    }
    .fp{
        width: auto;
        height: auto;
    }
    form{
        width: auto;
    }
    .TesteInp{
        width: 80%;
    }
    .Vl{
        width: 20%;
    }
}
@media screen and (max-width: 920px){
    
    
    .imgIngresso{
        margin-top: 60px;
    }
    .fotoCa{
        height: 500px;
    }
    .ExpC{
        margin-top: -250px;
    }
    .fSize{
        margin-top: -250px;
    }
}
@media screen and (max-width: 500px){
    .enfatiza{
        font-size: 30px;
    }
    .fSize{
        font-size: 75%;
    }
    .FraEf{
        font-size: 90%;
    }
    .fotoCa{
        height: 300px;
    }
    .Cards{
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto auto auto;
    }
    .item1, .item2{
        margin-top: 40px;
        display: grid;
        gap: 5px;
        grid-template-columns: auto;
        grid-template-rows: auto auto;
    }
    .item1{
        height: 500px;
    }
    .dimensoes{
        height: 100%;
        margin-top: 20px;
    }
    form{
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto;
    }
    .Vl{
        width: 100%;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .TesteInp{
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;

    }

    .imgIngresso{
        margin-top: -30px;
    }

    .ExpC{
        margin-top: 0px;
    }
    .fSize{
        margin-top: 0px;
    }
}
@media screen and (max-width: 360px){
    .enfatiza{
        font-size: 85%;
    }
    .fSize{
        font-size: 70%;
    }
    .FraEf{
        font-size: 90%;
    }
}
`




