import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <NavLink className="navlink" to="/">Home</NavLink>
      <NavLink className="navlink" to="/countries">Countries</NavLink>
      <NavLink className="navlink" to="/add-country">Add a Country</NavLink>
    </nav>
  );
}

export default Nav;
