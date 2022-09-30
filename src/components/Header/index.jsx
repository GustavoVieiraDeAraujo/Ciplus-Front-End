import React, { useState } from "react";
import { StyleHeader } from "./styles.jsx";
import { Link } from "react-router-dom";

import logo from "./assets/Cine.png"

export const Header = ()=> {
    const [usuario] = useState(() => {
        const salvo = localStorage.getItem("ciplus_usuario");
        return salvo ? JSON.parse(salvo) : null;
    });

    const handleLogout = () => {
        localStorage.removeItem("ciplus_usuario");
        window.location.href = "/";
    }

    return (
        <StyleHeader>
            <div className="grid-item"><Link to={"/"}><img className="cineLogo" src={logo} /></Link></div>
            <div className="grid-item"></div>
            <div className="grid-item alinha1">
            <Link className="link" to={"/Movies"}><button className="botoes bNeutro">FILMES</button></Link>
                {usuario ? (
                    <button className="botoes bNeutro" onClick={handleLogout}>OLÁ, {usuario.name.split(" ")[0].toUpperCase()} (SAIR)</button>
                ) : (
                    <Link className="link" to={"/login"}><button className="botoes bNeutro">ENTRAR</button></Link>
                )}
                <Link className="link" to={"/register"}><button className="botoes bColored">CADASTRE-SE</button></Link>
            </div>
        </StyleHeader>
    )
}
