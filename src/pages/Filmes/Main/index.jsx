import React from "react";
import { StyleMain } from "./style";

function Main() {

    return (<StyleMain>

        <div className="grid-item cla1">
            <a className="button">Em cartaz</a>
            <a className="button">Em breve</a>
            <a className="button">Cinemas</a>
            <a className="button">Ingressos</a>
        </div>
        <div className="grid-item Frase">Filmes em cartaz</div>
    </StyleMain>
    )

}

export default Main;