import styled from 'styled-components';

export const StyleButton = styled.button`
    margin: ${props => props.margin ? props.margin : "auto"};
    margin-bottom: ${props => props.marginbottom ? props.marginbottom : "auto"};
    width: ${props => props.width ? props.width : '100%'};
    color: ${props => props.color ? props.color : "white"};
    height: ${props => props.height ? props.height : 'auto'};
    border-radius: ${props => props.borderradius ? props.borderradius : 'auto'};
    border: ${props => props.border ? props.border : 'auto'};
    background-color: ${props => props.color ? props.color : '#0B062B'};
    cursor: pointer;
`
