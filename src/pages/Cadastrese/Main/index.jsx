import React from "react";
import { StyleMain } from "./style.jsx"
import { Forms } from '../../../components/Forms/index.jsx'
import netflix from "../assets/netflix.jpg"

function main() {
    return (<StyleMain style={{ backgroundImage: `url(${netflix})`}}>
        <div className="grid-item">
          <Forms  titulo={"Cadastre-se"}  />  
        </div>
    </StyleMain>
    )

}

export default main;