import styled from"styled-components";

export const StyleCarousel=styled.div`
    background-color:#0B062B;
    width: 100vw;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    
    .carousel{
        display:flex;
        overflow-x:auto;
        scroll-behavior:smooth;
    }

    .carousel::-webkit-scrollbar{
        display:none;   
    }

    .carousel .item{
        background-color:white;
        margin:10px;
        padding:10px;
        width:280px;
        border-radius:16px;
        flex:none;
    }

    .carousel .item .image img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    .carousel .item .info{
        height:140px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }

    .carousel .item .infospan{
        display:block;
        text-align:center;
        color:#1e1e1e;
        padding:5px;
        border-radius:10px;
    }

    .carousel .item .info .name{
        font-size:1.2rem;
        font-weight:bold;
        margin:10px0;
        color:#00a8fb;
    }

    .buttons{
        width:100%;
        text-align:center;
    }

    .buttons{
        background-color:transparent;
        border:none;
        cursor:pointer;
    }

    .buttons:first-childimg{
        transform:rotate(180deg);
    }
    @media screen and (max-width: 750px){
        width:100vw;
    }

`
