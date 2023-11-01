import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        /* add styling to Navlink */
      >
        Home
      </NavLink>
      <NavLink
        to="/directors"
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
      >
        Actors
      </NavLink>
    
    </nav>
    );
};

export default NavBar;
