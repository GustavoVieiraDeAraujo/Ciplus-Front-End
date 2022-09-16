import React from "react";
import { StyleButton } from "./styles.jsx"

export const Button = ({...props}) =>{
    return(
        <StyleButton 
            onClick={props.onClick}
        >
            {props.text}
        </StyleButton>
    )
}
