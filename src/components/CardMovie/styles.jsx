import styled from "styled-components"

export const StyleCardMovie = styled.div`
    background-color: #0B062B;
    color: #fff;
    padding-top: 50px;
    padding-bottom: 50px;
    width: 600px;
    font-family: 'Inter', sans-serif;
    position: relative;

    .first-run {
        display: grid;
        width: 80px;
        height: 30px;
        position: absolute;
        font-size: 15px;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 5px;
        margin-top: 15px;
        margin-left: -15px;
        pointer-events: none;
    }
    .first-run p {
        margin: 0;
        text-align: center;
        align-self: center;
    }
    .image {
        margin: 0px 25px;
        transition: transform 0.5s;
    }
    .image img {
        width: 250px;
        height: 400px;
    }
    .image:hover {
        transform: translateX(10px) scale(1.1);
    }
    .info {
        background-color: #000;
        height: 25px;
        margin-top: -4px;
        text-align: left;
    }
    .info p {
        margin: 0px;
        padding-top: 3px;
        padding-left: 5px;
    }
`