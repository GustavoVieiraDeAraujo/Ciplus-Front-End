import React from "react";
import { StyleCardPlan } from "./styles";

export const CardPlan =({type,price,benefits,duration_months})=>{
    return(
        <StyleCardPlan>
            <h2>{type}</h2>
            <p>R${(price/100).toFixed(2)}{" "}reais</p>
            <p className = "benefits">{benefits}</p>
            <p>{duration_months} mês de duração</p>
            <button>Escolher Plano</button>
        </StyleCardPlan>
    )
}