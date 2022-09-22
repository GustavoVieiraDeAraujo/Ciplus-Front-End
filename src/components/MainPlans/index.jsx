import React from "react";
import { StyleMainPlans } from "./styles.jsx";
import { AreaCardPlans } from './../AreaCardPlans/index';

import banner from "./assets/banner.png";
import ingressos from "./assets/ingressos.png";
import pipoca from "./assets/pipoca.png";

export const MainPlans = ()=> {
    return (
        <StyleMainPlans>
            <section className="alinhamento">
                <div className="grid-item"><img className="banner" src={banner}/></div>
            </section>
            <section className="Descricao">
                <h1>Escolha sua experiência <span className="corAzul">CIPLUS+</span></h1>
                <ul>
                    <li>Assista mais por menos. E sem precisar pegar filas</li>
                    <li>Desfrute da melhor experiência do cinema com o IMAX 3D e 4k</li>
                    <li>Altere o plano ou cancele quando quiser</li>
                </ul>
            </section>
            <div className="alinhaImgIngressos"><img className="imgIngressos" src={ingressos}/></div>
                <AreaCardPlans/>
            <div className="alinhaImgPipoca"><img className="imgPipoca" src={pipoca}/></div>
        </StyleMainPlans>
    )
}