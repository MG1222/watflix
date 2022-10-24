// Fontawesome icons
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Logo(props) {
    const { brand } = props;
    
    return (
        <a className="logo">
            <FontAwesomeIcon icon={faFilm} />{brand}
        </a>
    )
};