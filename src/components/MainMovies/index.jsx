import React from "react";
import { StyleMainMovies } from "./styles.jsx";
import Carousel from "../Carousel/index"
import { Link } from "react-router-dom";

export const MainMovies = ()=> {
    return (
        <StyleMainMovies>
            <nav className="grid-item cla1">
                <a className="button">Em cartaz</a>
                <a className="button">Em breve</a>
                <a className="button">Cinemas</a>
                <Link className="link" to={"/tickets"}>
                    <button className="button">
                        <a className="button">Ingressos</a>
                    </button>
                </Link>
            </nav>
            <h1 className="grid-item Frase">Filmes em cartaz</h1>
            <Carousel />

        </StyleMainMovies>
    )
}