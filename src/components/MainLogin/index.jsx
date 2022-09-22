import React from "react";
import { StyleMainLogin } from "./styles.jsx"
import { Input } from "../Input/index.jsx";
import { Button } from "../Button/index.jsx";

import netflix from "./assets/netflix.jpg"

export const MainLogin = ()=> {
    return(
        <StyleMainLogin style={{ backgroundImage: `url(${netflix})`}}>
            <div className="grid-item">
                <Input height={"40px"} background={"#444343"} width={"90%"} type={"email"} placeholder={"E-mail"} />
                <Input height={"40px"}  background={"#444343"} width={"90%"} type={"text"} placeholder={"Insira sua senha"}/>
            <div className="divs">
                <Input type={"radio"} />Lembrar de mim!
            </div>
            <a>Esqueceu sua senha?</a>
                <Button borderradius={"5px"} height={"40px"} text={"Fazer Login"} width={"90%"}/>
            </div>
        </StyleMainLogin>
    )
}
