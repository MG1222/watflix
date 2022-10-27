
import Logo from "./Logo";
import NavLink from "./NavLink";
import Account from "./Account";
import Language from "./Language";
import { Outlet } from "react-router-dom";


export default function Navbar(props) {
    const { links , brand} = props;
    return (
        <>
            <div className="navbar">
                <div>
                    <Logo brand={brand}/>
                </div>
                <div className="links">
                    { links.map( (link, key) =>
                        <NavLink to={link.to} name={link.name} key={`navlink${key}`} />
                    )}

                <Account />
                </div>
            </div>
            <Outlet/>
        </>
    );
}