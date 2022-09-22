import styled from 'styled-components';
import InputMask from "react-input-mask";

export const StyleInput = styled(InputMask)`
    display: ${props => props.display ? props.display : "inline-block"};
    margin: ${props => props.margin ? props.margin : "auto"};
    padding-left: ${props => props.paddingleft ? props.paddingleft : "auto"};
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : 'auto'};
    background-color: ${props => props.background ? props.background : 'blue'};
    color: ${props => props.color ? props.color : 'white'};
    border-radius: ${props => props.borderradius ? props.borderradius : '5px'}
`