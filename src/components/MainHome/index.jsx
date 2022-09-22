import React from "react";
import { StyleMainHome } from "./styles.jsx";
import { Button } from "../Button/index.jsx";
import { Link } from "react-router-dom";

import alice from "./assets/alice.jpg";
import oculos from "./assets/oculos.png";
import pipoca from "./assets/pipocaerefri.png";
import wanda from "./assets/wanda.png";
import moana from "./assets/moana.png";
import basic from "./assets/basic.jpg"
import standart from "./assets/standart.jpg"
import premium from "./assets/premium.jpg"
import blackduo from "./assets/black-duo.jpg"

export const MainHome = ()=> {
    return (
        <StyleMainHome>
            <figure className="grid-item fotoCa">
                <img className="FotoFundo" src={alice} />
            </figure>
            <section className="grid-item ExpC">
                <h1 className="enfatiza">Um novo jeito de experimentar o cinema.</h1>
                <p className="fSize">Conheça nossos planos e economize na assinatura trimestral ou anual com o pagamento antecipado.</p>
            </section>
            <figure className="divDaImg1">
                <img className="imgIngresso" src={oculos} />
            </figure>
            <section className="grid-item Cards">
                <div className="card1 corpoC">
                <img className="imgC" src={basic} />
                </div>
                <div className="card2 corpoC">
                <img className="imgC" src={standart} />
                </div>
                <div className="card3 corpoC">
                <img className="imgC" src={premium} />
                </div>
                <div className="card4 corpoC">
                <img className="imgC" src={blackduo} />
                </div>
            </section>
            <Link className="navs" to={"/plans"}>
                <Button 
                    border={"solid white 1px"} 
                    borderradius={"5px"} 
                    height={"40px"} 
                    text={"Escolha seu plano!"}
                    width={"30%"} />
            </Link>
            <figure className="divDaImg2">
                <img className="imgPipoca" src={pipoca} />
            </figure>
            <section className="grid-item item1">
                <article className="item1c enfatizaUP">
                    <h2 className="enfatiza">Assista a lançamentos!</h2>
                    <p> Seja o primeiro a saber o próximo filme a ser lançado!</p>
                </article>
                <img className="dimensoes" src={wanda} />
            </section>
            <section className="grid-item item2">
                <img className="dimensoes2" src={moana} />
                <article className="enfatizaUP">
                    <h2 className="enfatiza">Crie perfis para crianças.</h2>
                    <p> Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</p>
                </article>
            </section>
            <section className="grid-item Fp">
                <p className="FraEf">Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>
                <form><input placeholder="teste" className="TesteInp" />
                    <button className="Vl">Vamos lá!</button>
                </form>
            </section>
        </StyleMainHome>
    )
}