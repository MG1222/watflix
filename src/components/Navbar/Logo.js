// Fontawesome icons
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Logo(props) {
    const { brand } = props;
    const navigate = useNavigate();

    return (
        <Link className="logo" to="/">
            <FontAwesomeIcon icon={faFilm} />{brand}
        </Link>
    )
};