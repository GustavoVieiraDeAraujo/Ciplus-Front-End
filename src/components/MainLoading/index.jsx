import React from "react";
import { StyleLoading } from "./styles";

export const MainLoading = ({...props }) => {
    return (
        <StyleLoading 
            display={props.display}
        >
            <div></div>
            <div></div>
            <div></div>
        </StyleLoading>
    )
}