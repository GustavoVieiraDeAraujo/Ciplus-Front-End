import styled, { keyframes } from "styled-components";

const frames = keyframes`
0%{
    height: 8em;
}

50%{
    height: 4em;
}

100%{
    height: 8em;
}
`;

export const StyleLoading = styled.div`

width: 100vw;
height:100vh;
background-color: black;
position: fixed;
z-index: 2;
display: ${props => props.display ? props.display : "flex"};
gap: 20px;
align-items: center;
justify-content: center;


div{
    animation: ${frames} 1.5s linear infinite;
    background-color: #13678A;
    height: 4em;
    width: 1em;

    &:nth-child(2){
        animation-delay: 0.1s;
    }

    &:nth-child(3){
        animation-delay: 0.3s;
    }
}
`