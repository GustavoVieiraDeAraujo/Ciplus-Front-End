import styled from 'styled-components';

export const StyleInput = styled.input`
    margin: ${props => props.margin ? props.margin : "0" };
    width: ${props => props.width ? props.width : 'max-content' };
    height: ${props => props.height ? props.height : 'auto' };
    background-color: ${props => props.color ? props.color : 'blue' };

    ::placeholder{
        color: ${props => props.color ? props.color : "white" };
    }

`