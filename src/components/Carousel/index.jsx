import React, { useEffect, useState, useRef } from "react";
import { StyleCarousel } from "./styles.jsx";
import { GetAll } from "../../services/Api";
import { CardMovie } from "../CardMovie/index.jsx";

import rightArrow from "../../components/Footer/assets/right-arrow.png" 
import leftArrow from "../../components/Footer/assets/left-arrow.png" 

export const Carousel = () => {

    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => { GetAll("movies").then(response => setData(response)) }, []);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    if (!data || !data.length) return null;

    return (
        <StyleCarousel>
            <button class="buttons" onClick={handleLeftClick}>
                <img src={leftArrow} alt="Scroll Left" />
            </button>
            <div class="carousel" ref={carousel}>
                {data.map((movie) => {
                    const { id, movie_image_link } = movie;
                    return (
                        <CardMovie 
                        id={id} 
                        imageLink={movie_image_link} 
                        
                        />
                    );
                })}
            </div>
            <button class="buttons" onClick={handleRightClick}>
                <img src={rightArrow} alt="Scroll Right" />
            </button>
        </StyleCarousel>
    )
}

export default Carousel