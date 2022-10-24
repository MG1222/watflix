import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Account(props) {
    return (
        <div className="account">
            <FontAwesomeIcon className="fa-3x" icon={faUser} />
        </div>
    )
}