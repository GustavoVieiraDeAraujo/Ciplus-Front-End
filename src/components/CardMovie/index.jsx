import { StyleCardMovie } from "./styles.jsx";

export const CardMovie = ({...props}) => {
    return (
        <StyleCardMovie key={props.id}>
            <div className="image">
                <div className="first-run">
                    <p>Estreia</p>
                </div>
                <img src={props.imageLink} alt="" />
                <div className="info">
                    <p>IMAX  4K  3D</p>
                </div>
            </div>
        </StyleCardMovie>
    );
}
