import styled from 'styled-components';

export const StyleButton = styled.button`
    // atributos que podem ser modificados por prop
    margin: ${props => props.margin ? props.margin : "auto" };
    width: ${props => props.width ? props.width : '100%' };
    color: ${props => props.color ? props.color : "white" };
    height: ${props => props.height ? props.height : 'auto' };
    border-radius: ${props => props.borderradius ? props.borderradius : 'auto' };
    border: ${props => props.border ? props.border : 'auto' };
    background-color: ${props => props.color ? props.color : '#0B062B' };
    // atributos padrões
    cursor: pointer;
`