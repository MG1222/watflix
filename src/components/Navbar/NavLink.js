export default function NavLink(props) {
    const {to, name} = props;
    return (
        <a className="navlink" href={to}>{name}</a>
    )
}