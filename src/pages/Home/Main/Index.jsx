import React from "react";
import { StyleMain } from "./styles.jsx";
import moana from "../assets/moana.png"
import wanda from "../assets/wanda.png"
import pipoca from "../assets/pipocaerefri.png"
import oculos from "../assets/oculos.png"


function Main() {


    return (
    <StyleMain>
        <div className="grid-item fotoCa"></div>
        <div className="grid-item ExpC">
            <h1 className="enfatiza">Um novo jeito de experimentar o cinema.</h1>
            <p className="fSize">Conheça nossos planos e economize na assinatura trimestral ou anual com o pagamento antecipado.</p>
        </div>
        <div className="divDaImg1">
        <img className="imgIngresso" src={oculos}/>
        </div>
        <section className="grid-item Cards">
            <div className="card1 corpoC">PREÇOS1</div>
            <div className="card2 corpoC">PREÇOS2</div>
            <div className="card3 corpoC">PREÇOS3</div>
            <div className="card4 corpoC">PREÇOS4</div>
        </section>
        <div className="divDaImg2">
            <img className="imgPipoca" src={pipoca}/>
        </div>
        <div className="grid-item item1">
            <p className="enfatizaUP"><h2 className="enfatiza">Assista a lançamentos!</h2><br/>

                Seja o primeiro a saber o próximo filme a ser lançado! </p>
            <img className="dimensoes" src={wanda} />
        </div>
        <div className="grid-item item2">
            <img className="dimensoes2" src={moana} />
            <p className="enfatizaUP"><h2 className="enfatiza">Crie perfis para crianças.</h2><br/>
                Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</p>
            </div>
        <div className="grid-item Fp">
            <p className="FraEf">Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
            <form><input placeholder="teste" className="TesteInp" />
            <button className="Vl">Vamos lá!</button>
            </form> 
        </div>
    </StyleMain>
    ) 
}

export default Main