import React from "react";
import { StyleButton } from "./styles.jsx"

export const Button = ({...props}) =>{
    return(
        <StyleButton 
            onClick={props.onClick}
            type={props.type}
        >
            {props.text}
        </StyleButton>
    )
}
