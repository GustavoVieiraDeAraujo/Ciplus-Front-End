import React from "react";
import { StyleMainPlanos} from "./styles.jsx";
import banner from "../MainPlanos/assets/banner.png"
import { AreaCardPlans } from './../AreaCardPlans/index';


function MainPlanos(){
    return (<StyleMainPlanos>

            <section>
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

            <AreaCardPlans/>

        </StyleMainPlanos>
    )
}
    export default MainPlanos;