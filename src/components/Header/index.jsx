import React from "react";
import { StyleHeader } from "./styles.jsx";
import { Link } from "react-router-dom";

import logo from "./assets/Cine.png"

export const Header = ()=> {
    return (
        <StyleHeader>
            <div className="grid-item"><Link to={"/"}><img className="cineLogo" src={logo} /></Link></div>
            <div className="grid-item"></div>
            <div className="grid-item alinha1">
                <Link to={"/login"}><button className="botoes bNeutro">ENTRAR</button></Link>
                <Link to={"/register"}><button className="botoes bColored">CADASTRE-SE</button></Link>
            </div>
        </StyleHeader>   
    )
}
