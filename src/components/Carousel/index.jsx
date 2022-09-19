import React, { useEffect, useState, useRef } from "react";
import { StyleCarousel } from "./styles.jsx";
import { GetAll } from "../../services/Api.jsx";

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
                {/* <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Left" /> */}
                teste 1
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
                        <div class="item" key={id}>
                            <div class="image">
                                <img src={movie_image_link} alt={name} />
                            </div>
                            <div class="info">
                                <span class="name">{name}</span>
                                <span class="creation_date">{creation_date}</span>
                                <span class="synopsis">{synopsis}</span>
                                <span class="classification">{classification}</span>
                                <span class="genre">{genre}</span>
                                <span class="duration_minutes">{duration_minutes}</span>
                                <span class="movie_sessions">{movie_sessions}</span>
                            </div>
                        </div>
                    );

                })}
            </div>
            <button class="buttons"  onClick={handleRightClick}>
                {/* <img src="/static/images/216151_right_chevron_icon.png" alt="Scroll Right" /> */}
                teste 2
            </button>
        </StyleCarousel>
    )
}