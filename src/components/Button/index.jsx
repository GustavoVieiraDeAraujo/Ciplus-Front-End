import React from "react";
import { StyleButton } from "./style.jsx"

export const Button = ({...props}) =>{
    return(
        <StyleButton 
            borderradius={props.borderradius}
            border={props.border}
            width={props.width}
            height={props.height}
            onClick={props.onClick}
            type={props.type}
        >
            {props.text}
        </StyleButton>
    )
}