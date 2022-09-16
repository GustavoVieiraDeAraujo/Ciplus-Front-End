import styled from 'styled-components';

export const StyleButton = styled.button`
    // atributos que podem ser modificados por prop
    margin: ${props => props.margin ? props.margin : "0" };
    width: ${props => props.width ? props.width : 'max-content' };
    color: ${props => props.color ? props.color : "white" };
    height: ${props => props.height ? props.height : 'auto' };
    background-color: ${props => props.color ? props.color : 'blue' };

    // atributos padrões
    cursor: pointer;
`