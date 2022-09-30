import React from "react";
import { useParams } from "react-router-dom";
import { MainTickets } from "../components/MainTickets/index.jsx";

export const Tickets = () => {
    const { movieId } = useParams();
    return (
        <MainTickets movieId={movieId} />
    )
}
