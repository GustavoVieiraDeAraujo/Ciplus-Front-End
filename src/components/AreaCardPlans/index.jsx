import React,{useState,useEffect} from "react";
import { StyleAreaCardPlans } from "./styles";
import { CardPlan } from "../CardPlan";
import { GetAll } from "../../services/Api"; 

export const AreaCardPlans =()=>{
    const [plans, setPlans] = useState([])
    useEffect(()=> getPlans, [])

    async function getPlans(){
        try{
            const response = await GetAll("plans")
            console.log(response)
            setPlans(response)
        }catch(e){
            console.log(e)
        }
    }

    return(
        <StyleAreaCardPlans>
            <div className = "organizaCard">
                {plans.map( plans =>
                    <CardPlan
                        type={plans.type}
                        price={plans.price} 
                        benefits={plans.benefits} 
                        duration_months={plans.duration_months}
                    />
                )}
            </div>
        </StyleAreaCardPlans>
    )
}
    
