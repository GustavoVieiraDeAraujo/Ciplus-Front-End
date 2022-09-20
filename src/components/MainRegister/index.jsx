import React from "react";
import { StyleMainRegister } from "./styles.jsx"
import { Forms } from '../Forms/index.jsx'

import netflix from "./assets/netflix.jpg"

export const MainRegister = ()=> {
    return (
      <StyleMainRegister style={{backgroundImage: `url(${netflix})`}}>
        <div className="grid-item">
          <Forms titulo={"Cadastre-se"}  />  
        </div>
      </StyleMainRegister>
    )
}