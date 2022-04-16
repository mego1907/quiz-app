import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "./style.scss"

const Navbar = () => {

  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();


  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__logo">
          <Link to="/">
            <h3>Quiz App</h3>
          </Link>
        </div>
        <div className="navbar__right">
          <div className="navbar__user">
            {isAuthenticated && (
              <>
                <img src={user?.picture} alt="" />
                <p>{user?.name}</p>
              </>
            )}
          </div>
          <div className="navbar__content">
            <div className="navbar__content__btns">
              {!isAuthenticated ? (
                <button onClick={() => loginWithRedirect()}>Login</button>
              ) : (
                <button onClick={() => logout()}>Logout</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar