import React from "react";
import { StyleButton } from "./styles.jsx"

export const Button = ({ ...props }) => {
    return (
        <StyleButton
            marginbottom={props.marginbottom}
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

