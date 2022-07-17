import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";

export const Navbar = () => {

  const {user, logout} = useContext(AuthContext);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();

    navigate('/login', {
      replace: true,
    });
  };
  
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        HeroesApp
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className="nav-item nav-link my-auto"
            to="/marvel"
          >
            Marvel
          </NavLink>
          
          <NavLink
            className="nav-item nav-link my-auto"
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className="nav-item nav-link"
            to="/search"
          >
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">{user?.name}</span>

          <button 
            className="nav-item nav-link btn"
            onClick={onLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
