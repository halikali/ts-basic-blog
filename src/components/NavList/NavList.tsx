import {
  faCopyright,
  faHome,
  faIdCard,
  faInfo,
  faInfoCircle,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

import "./NavList.scss";
import NavListItem from "./NavListItem";

const NavList = () => {
  return (
    <div className="navlist">
      <nav>
        <ul>
          <li className="navlist__list-item">
            <NavListItem
              to={"/"}
              iconName={faHome}
              pageName={"home"}
              key="Home"
            />
          </li>
          <li className="navlist__list-item">
            <NavListItem
              to={"/about-us"}
              iconName={faInfo}
              pageName={"About Us"}
              key="About Us"
            />
          </li>
          <li className="navlist__list-item">
            <NavListItem
              to={"/contact-us"}
              iconName={faIdCard}
              pageName={"Contact Us"}
              key="Contact Us"
            />
          </li>
          <li className="navlist__list-item">
            <NavListItem
              to={"/disclaimer"}
              iconName={faCopyright}
              pageName={"Disclaimer"}
              key="disclaimer"
            />
          </li>
          <li className="navlist__list-item">
            <NavListItem
              to={"/privacy-policy"}
              iconName={faLock}
              pageName={"Privacy Policy"}
              key="Privacy Policy"
            />
          </li>
          <li className="navlist__list-item">
            <NavListItem
              to={"/terms"}
              iconName={faInfoCircle}
              pageName={"Terms And Condition"}
              key="Terms And Condition"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavList;
