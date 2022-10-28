import { Link } from "react-router-dom";

export default function NavLink(props) {
    const {to, name} = props;

    return (
        <Link className="navlink" to={to}>{name}</Link>
    )
}