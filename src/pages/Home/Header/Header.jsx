import React from "react";
import style from "../Header/style.css"
import cine from "../assets/cine.png"

function Header(){
    

    return <header>
        <div className="grid-item"><img className="cineLogo" src={cine}/></div>
        <div className="grid-item"></div>
        <div className="grid-item alinha1">
            <button className="botoes bNeutro">ENTRAR</button>
            <button className="botoes bColored">CADASTRA-SE</button>
        </div>
        

</header>
}

export default Header