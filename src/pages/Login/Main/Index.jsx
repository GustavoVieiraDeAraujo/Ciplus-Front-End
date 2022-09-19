import React from "react";
import { StyleMain } from "./style.jsx"
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import netflix from "../assets/netflix.jpg"
function main() {
    return <StyleMain style={{ backgroundImage: `url(${netflix})`}}>
        <div className="grid-item">
           
           <Input height={"40px"} background={"#444343"} width={"90%"} type={"email"} placeholder={"E-mail"} />
           <Input height={"40px"}  background={"#444343"} width={"90%"} type={"text"} placeholder={"Insira sua senha"}/>
           
           <div className="divs">
           <Input type={"radio"} />Lembrar de mim!
           </div>
           <a>Esqueceu sua senha?</a>
           <Button borderradius={"5px"} height={"40px"} text={"Fazer Login"} width={"90%"}/>
        </div>
    </StyleMain>
}
export default main;