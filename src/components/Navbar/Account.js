import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Language from "./Language";

export default function Account(props) {
    return (
        <div className="account">
            <Language/>
            <FontAwesomeIcon className="fa-3x" icon={faUser} />
        </div>
    )
}