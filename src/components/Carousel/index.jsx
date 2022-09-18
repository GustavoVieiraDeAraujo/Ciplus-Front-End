import React, { useEffect, useState, useRef } from "react";
import { StyleCarousel } from "./styles.jsx";
import { GetAll } from "../../services/Api.jsx";
import { Card } from "../Card/index.jsx";

import rightArrow from "../../assets/img/right-arrow.png"
import leftArrow from "../../assets/img/left-arrow.png"

export const Carousel = () => {

    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {GetAll("movies").then(response => setData(response))}, []);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    if (!data || !data.length) return null;
    
    return(
        <StyleCarousel>
            {/* <div className="logo">
                <img src="" alt="" />
            </div> */}
            <button class="buttons" onClick={handleLeftClick}>
                <img src={leftArrow} alt="Scroll Left" /> 
                
            </button>
            <div class="carousel" ref={carousel}>
                {data.map((movie) => {
                    const { id, 
                            name, 
                            creation_date, 
                            synopsis, 
                            classification, 
                            genre, 
                            duration_minutes, 
                            movie_sessions, 
                            movie_image_link } = movie;

                    return (
                        <Card id={id} imageLink={movie_image_link} name={name} CreationDate={creation_date} synopsis={synopsis} classification={classification} genre={genre} duration={duration_minutes} sessions={movie_sessions}/>
                    );
                })}
            </div>
            <button class="buttons"  onClick={handleRightClick}>
                <img src={rightArrow} alt="Scroll Right" />
            </button>
        </StyleCarousel>
    )
}