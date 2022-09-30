import { Link } from "react-router-dom";
import { StyleCardMovie } from "./styles.jsx";
import { posterIndisponivel } from "../../utils/posterFallback.js";

export const CardMovie = ({...props}) => {
    return (
        <Link to={`/tickets/${props.id}`}>
            <StyleCardMovie key={props.id}>
                <div className="image">
                    <div className="first-run">
                        <p>Estreia</p>
                    </div>
                    <img src={props.imageLink} alt="" onError={(e) => { e.target.onerror = null; e.target.src = posterIndisponivel; }} />
                    <div className="info">
                        <p>IMAX  4K  3D</p>
                    </div>
                </div>
            </StyleCardMovie>
        </Link>
    );
}
