
import Logo from "./Logo";
import NavLink from "./NavLink";
import Account from "./Account";


export default function Navbar(props) {
    const { links , brand} = props;
    return (
        <div className="navbar">
            <Logo brand={brand}/>
            { links.map( (link, key) =>
                <NavLink to={link.to} name={link.name} key={`navlink${key}`} />
            )}
            <Account />
        </div>
    );
}