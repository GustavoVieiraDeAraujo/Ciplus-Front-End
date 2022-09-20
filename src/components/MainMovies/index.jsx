import React from "react";
import { StyleMainMovies } from "./styles.jsx";
import Carousel from "../Carousel/index"

export const MainMovies = ()=> {
    return (
        <StyleMainMovies>
            <nav className="grid-item cla1">
                <a className="button">Em cartaz</a>
                <a className="button">Em breve</a>
                <a className="button">Cinemas</a>
                <a className="button">Ingressos</a>
            </nav>
            <h1 className="grid-item Frase">Filmes em cartaz</h1>
            <Carousel />
        </StyleMainMovies>
    )
}