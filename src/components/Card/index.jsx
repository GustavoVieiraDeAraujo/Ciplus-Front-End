import { CardMovie } from "./styles";

export function Card(props) {
    return (
        <CardMovie key={props.id}>
            <div className="image">
                <div className="first-run">
                    <p>Estreia</p>
                </div>
                <img src={props.imageLink} alt="" />
                <div className="info">
                    <p>IMAX  4K  3D</p>
                </div>
            </div>

        </CardMovie>
    );
}

/* 
<div className="info">
                <span class="name">{props.name}</span>
                <span class="creation_date">{props.creationDate}</span>
                <span class="synopsis">{props.synopsis}</span>
                <span class="classification">{props.classification}</span>
                <span class="genre">{props.genre}</span>
                <span class="duration_minutes">{props.duration}</span>
                <span class="movie_sessions">{props.sessions}</span>
            </div>
*/
