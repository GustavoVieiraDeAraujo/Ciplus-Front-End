import React from "react";
import { StyleHeader } from "./styles.jsx";
import cine from "../Header/assets/cine.png";


function Header(){
    return (
        <StyleHeader>
            <div className="grid-item"><img className="cineLogo" src={cine}/></div>
            <div className="grid-item"></div>
            <div className="grid-item alinha1">
                <button className="botoes bNeutro">ENTRAR</button>
                <button className="botoes bColored">CADASTRE-SE</button>
            </div>
        </StyleHeader>   
    )
}
export default Header;