import React from "react";
import { StyleMainPlanos} from "./styles.jsx";
import banner from "../MainPlanos/assets/banner.png"
import { AreaCardPlans } from './../AreaCardPlans/index';
import pipoca from "./assets/pipoca.png"
import ingressos from "./assets/ingressos.png"



function MainPlanos(){
    return (<StyleMainPlanos>

            <section className="alinhamento">
                <div className="grid-item"><img className="banner" src={banner}/></div>
                <button className="botoes">Escolha seu plano</button>
            </section>

            <section className="Descricao">
                <h1>Escolha sua experiência <span className="corAzul">CIPLUS+</span></h1>
                <ul>
                    <li>Assista mais por menos. E sem precisar pegar filas</li>
                    <li>Desfrute da melhor experiência do cinema com o IMAX 3D e 4k</li>
                    <li>Altere o plano ou cancele quando quiser</li>
                </ul>
            </section>

            <div className= "alinhaImgIngressos"><img className="imgIngressos" src={ingressos}/></div>

            <AreaCardPlans/>

            <div className= "alinhaImgPipoca"><img className="imgPipoca" src={pipoca}/></div>

        </StyleMainPlanos>
    )
}
    export default MainPlanos;