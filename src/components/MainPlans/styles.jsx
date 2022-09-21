import styled from "styled-components";

export const StyleMainPlans = styled.main`
    display: grid;
    grid-template-rows:  500px 180px 10px 300px 10px ;
    height: 1200px;
    width: 100vw;
    align-items: center;
    background: #000000;
    

    .banner{
        width: 100%;
    }

    .botoes{
        width: 300px;
        height: 60px;
        position: absolute;
        background: #0B062B;
        border-radius: 7px;
        color: white;
        font-family: 'Inter';
        font-size: 20px;
        margin-top: 350px;
    }

    .alinhamento{
        display: grid;
        justify-items: center;
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

    .alinhaImgIngressos{
        display: grid;
        justify-items:end;
        width: 80%;
    }

    .imgPipoca{
        width: 150px;
        height: 150px;
        position: absolute;
        margin-top: -30px;
    }

    .imgIngressos{
        width: 180px;
        height: 160px;
        position: absolute;
        margin-top:-95px;
        margin-left: 80px;
        position: absolute;
    }
    @media screen and (max-width: 500px){
        width: 100vw;
        height: 1500px;
        gap: 300px;
        .alinhamento{
            display:none;
        }
        h1{
            margin-left: 30px;
            width: auto;
        }
        p{
            width: auto;
        }
        li{
            margin-left: 20px;
            width: 300px;
            font-size: auto;
        }
        .banner{
            width: 100vw;
            margin: 0 0 0 0;
        }
        .Descricao{
            width: 100vw;
            font-size: 100vw;
        }
        .alinhaImgIngressos , .alinhaImgPipoca{
            display: none;
        }
    }



`