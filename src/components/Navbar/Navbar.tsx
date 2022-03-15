import "./Navbar.scss";
import logo from "assets/main-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import NavList from "components/NavList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const checkLogin = () => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {}, []);

  const logOut = (e: any) => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      localStorage.removeItem("isLoggedIn");
      navigate("/");
    }
  };
  return (
    <div className="navbar ">
      <div className="container">
        <div className="row">
          <div className="col-12 navbar__wrapper">
            <img
              src={logo}
              className={"navbar__logo"}
              alt={"exception error logo"}
            />

            <NavList />

            <div className="navbar__icon-wrapper">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={"navbar__icon navbar__icon--search"}
              />

              {checkLogin() && (
                <FontAwesomeIcon
                  onClick={(e) => logOut(e)}
                  icon={faSignOut}
                  className={"navbar__icon navbar__icon--logout"}
                />
              )}
              <FontAwesomeIcon
                onClick={() => setIsOpen(!isOpen)}
                icon={faBars}
                className={"navbar__icon navbar__icon--bars"}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`row navbar__mobile ${
          isOpen ? "navbar__mobile--opened" : "navbar__mobile--closed"
        }`}
      >
        <div className="col-12">
          <NavList />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
