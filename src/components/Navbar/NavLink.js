import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NavLink(props) {
    const {to, name} = props;

    const navigate = useNavigate();

    return (
        <Link className="navlink" to={to}>{name}</Link>
    )
}