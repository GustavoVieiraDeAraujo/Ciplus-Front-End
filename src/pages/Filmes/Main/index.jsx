import React from "react";
import { StyleMain } from "./style";

function Main() {

    return (<StyleMain>

        <nav className="grid-item cla1">
            <a className="button">Em cartaz</a>
            <a className="button">Em breve</a>
            <a className="button">Cinemas</a>
            <a className="button">Ingressos</a>
        </nav>
        <h1 className="grid-item Frase">Filmes em cartaz</h1>
    </StyleMain>
    )

}

export default Main;