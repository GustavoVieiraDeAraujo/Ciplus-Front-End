import React, {useContext} from "react";
import { StyleCardPlan } from "./styles.jsx";
import { Input } from "../Input/index.jsx";
import { FormsContext } from "../../context/FormsContext.jsx";

export const CardPlan = ({ type, price, benefits, duration_months, value})=>{

    const { handleInputChange } = useContext(FormsContext);

    return(
        <StyleCardPlan>
            <h2>{type}</h2>
            <p>R${(price/100).toFixed(2)}{" "}reais</p>
            <p className = "benefits">{benefits}</p>
            <p>{duration_months} mês de duração</p>
            <Input 
                type={"radio"} 
                name={"plan_id"}
                display={"none"}
                onChange={handleInputChange} 
                value={value} 
            />
        </StyleCardPlan>
    )
}