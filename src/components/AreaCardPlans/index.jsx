import React,{useState,useEffect} from "react";
import { StyleAreaCardPlans } from "./styles.jsx";
import { CardPlan } from "../CardPlan/index.jsx";
import { GetAll } from "../../services/Api.jsx"; 
import { Button } from "../Button/index.jsx";
import { Link } from "react-router-dom";


export const AreaCardPlans =()=>{

    const [plans, setPlans] = useState([])

    useEffect(()=> getPlans, [])

    async function getPlans(){
        try{
            const response = await GetAll("plans")
            setPlans(response)
        }catch(e){
            console.log(e)
        }
    }

    return(
        <StyleAreaCardPlans>
            <div className = "organizaCard">
                {plans.map( (plans)=>
                    <CardPlan
                        value={plans.id}
                        type={plans.type}
                        price={plans.price} 
                        benefits={plans.benefits} 
                        duration_months={plans.duration_months}
                    />
                )}
            </div>
            <Link to={"/register"}><Button /></Link>
        </StyleAreaCardPlans>
    )
}
    

