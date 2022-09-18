import React from "react";
import { StyleMainPlanos} from "./styles.jsx";
import banner from "../MainPlanos/assets/banner.png"


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

            <section className="grid-item Cards">
                <div className="card1 corpoC">PREÇOS1</div>
                <div className="card2 corpoC">PREÇOS2</div>
                <div className="card3 corpoC">PREÇOS3</div>
                <div className="card4 corpoC">PREÇOS4</div>
            </section>
        </StyleMainPlanos>
    )
}
    export default MainPlanos;