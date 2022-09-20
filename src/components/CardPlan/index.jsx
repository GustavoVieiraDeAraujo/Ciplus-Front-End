import React from "react";
import { StyleCardPlan } from "./styles.jsx";
import { Button } from "../Button/index.jsx";

export const CardPlan =({type,price,benefits,duration_months})=>{
    return(
        <StyleCardPlan>
            <h2>{type}</h2>
            <p>R${(price/100).toFixed(2)}{" "}reais</p>
            <p className = "benefits">{benefits}</p>
            <p>{duration_months} mês de duração</p>
            <Button text={"Escolher Plano"} marginbottom={"10px"} width={"70%"} borderradius={"10px"} />
        </StyleCardPlan>

    )
}