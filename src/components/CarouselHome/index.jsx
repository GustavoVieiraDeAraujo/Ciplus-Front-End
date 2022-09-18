import React, { useEffect, useState, useRef } from "react";
import { StyleCarousel } from "./styles.jsx";
import { CardHome } from "../CardHome/index.jsx";

import rightArrow from "../../assets/img/right-arrow.png"
import leftArrow from "../../assets/img/left-arrow.png"
import teste1 from "../../assets/img/teste/teste1.png"
import teste2 from "../../assets/img/teste/teste2.png"
import teste3 from "../../assets/img/teste/teste3.jpg"
import teste4 from "../../assets/img/teste/teste4.jpg"


export const CarouselHome = () => {

    const img = [
        {src: teste1}, 
        {src: teste2}, 
        {src: teste3},
        {src: teste4}
    ]
    
    const carousel = useRef(null);


    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };
    

    return(
        <StyleCarousel>
            <button class="buttons" onClick={handleLeftClick}>
                <img src={leftArrow} alt="Scroll Left" /> 
                
            </button>
            <div class="carousel" ref={carousel}>
                {img.map((movie) => {
                    const { src } = movie;
                    return (
                        <CardHome src={src}>
                            
                        </CardHome>
                    );
                })}
            </div>
            <button class="buttons"  onClick={handleRightClick}>
                <img src={rightArrow} alt="Scroll Right" />
            </button>
        </StyleCarousel>
    )
}