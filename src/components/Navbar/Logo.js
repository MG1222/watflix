// Fontawesome icons
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Logo(props) {
    const { brand } = props;

    return (
        <Link className="logo" to="/">
            <FontAwesomeIcon icon={faFilm} />{brand}
        </Link>
    )
};