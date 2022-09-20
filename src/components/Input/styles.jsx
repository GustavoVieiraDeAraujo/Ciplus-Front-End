import styled from 'styled-components';
import InputMask from "react-input-mask";

export const StyleInput = styled(InputMask)`
    display: ${props => props.display ? props.display : "inline-block"};
    margin: ${props => props.margin ? props.margin : "auto" };
    width: ${props => props.width ? props.width : '100%' };
    height: ${props => props.height ? props.height : 'auto' };
    background-color: ${props => props.backgroundcolor ? props.backgroundcolor : 'white' };
    color: ${props => props.color ? props.color : 'black' };
    
`