import { CardImg} from "./styles"

export function CardHome(props) {
    return (
        <CardImg>
            <img src={props.src} alt="" />
        </CardImg>
    )
}