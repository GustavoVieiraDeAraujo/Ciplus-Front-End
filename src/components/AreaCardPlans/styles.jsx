import styled from "styled-components";

export const StyleAreaCardPlans = styled.section`
    margin-top: 10px;
    text-align: center;
    color: white;

    
    .organizaCard{
        display: grid;
        grid-template-columns: repeat(4,auto);
        margin: 10px;
        height: 100%;
        cursor: pointer;
    }
    .linkRedi{
       color: white;
       text-decoration: none;
       height: auto;
    }
    .buttonT{
        width: 30px;
        height: 30%;
    }
    @media screen and (max-width: 500px){
        display: grid;
        justify-items: center;
        color: white;
        
    
        
        .organizaCard{
            display: grid;
            grid-template-columns: auto;
            grid-template-rows: repeat(4, auto);
            width: auto;
            margin:  0 0 0 0;
            margin-top: 20px;
            gap: 10px;
        }
    }


`