import styled from "styled-components";

export const StyleMainTickets = styled.main`
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;

    color: white;
    grid-template-rows: 600px 1fr 1fr 1fr 2fr;
    height: auto;
    width: 100vw;
    background-color: rgba(0, 0, 0, 1);

    .grid-item {
      height: 200px;
    }

    .fPrincipal {
      height: 400px;
      //background-image: url("https://images.alphacoders.com/126/1263450.jpg");
      background-size: cover;
      background-position: center;
    }

    .separa2 {
      display: grid;
      grid-template-columns: 1fr auto;
    }

    .separa3 {
      margin-left: 225px;
      display: grid;
      grid-template-rows: auto auto;
    }

    .imgEdit {
      position: absolute;
      width: 180px;
      height: 230px;
      margin-top: -100px;
      margin-left: 20px;
    }

    h2 {
      font-size: 40px;
      width: 100%;
    }

    p {
      margin: 10px;
    }

    .org {
      display: grid;
      grid-template-columns: 100px 100px 100px;
    }

    .separa4 {
      height: auto;
      display: grid;
      grid-template-rows: auto auto;
      text-align: center;
      justify-items: center;
    }

    .pF {
      margin-top: 20px;
      width: 750px;
      color: white;
      background-color: none;
      margin-bottom: 25px;
      text-align: start;
    }

    .separa5 {
      display: grid;
      grid-template-columns: auto auto auto;
      height: auto;
      text-align: center;
    }

    .separa6 {
      display: grid;
      grid-template-rows: 100px 120px 200px 130px;
      height: auto;
      text-align: center;
      background-color: #0b062b;
    }

    .navA {
      display: grid;
      grid-template-columns: repeat(7, auto);
      background-color: rgba(0, 0, 0, 0.5);
      text-align: center;
      justify-items: center;
      align-items: center;
      font-size: 20px;
      color: white;
    }

    a {
      transition: 0.3s;
      cursor: pointer;
    }

    a:hover {
      font-size: 23px;
    }

    .titleDay {
      background-color: rgba(0, 0, 0, 0.5);
      display: grid;
      align-items: center;
      color: white;
    }

    .navBotoes {
      display: grid;
      grid-template-columns: repeat(6, auto);
      align-items: center;
      justify-items: center;
      background-color: rgba(0, 0, 0, 0.5);
    }

    .estBotoes {
      width: 100px;
      height: 45px;
      background-color: rgba(217, 217, 217, 0.15);
      border-radius: 5px;
      color: white;
      font-size: 20px;
      border: solid 2px white;
      cursor: pointer;
    }
    
    .estBotoes:hover {
      background-color: #0b062b;
    }

    .inTittle {
      color: white;
      display: grid;
      align-items: center;
    }
    @media screen and (max-width: 765px){
        display: grid;
        grid-template-rows: repeat(5, auto) ;
      
      .navBotoes{
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto auto;
      }
      .navA{
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto auto;
      }
      .pF{
        font-size: 100%;
      }
     iframe{
      width: 100vw;
     }
     .separa6, .separa5, .separa4, .separa3, .titleS, .pF{
      width: 100vw;
      height: auto;
     }
     .separa3{
      grid-template-rows: auto auto;
      margin-left: 0;
      text-align: end;

     }
     .titleM{
      font-size: 25px;
     }
     .imgEdit{
      width: 25vw;
      height: 30%;
     }
}

`
