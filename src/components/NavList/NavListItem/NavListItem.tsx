import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

interface INavLıstItemProps {
  customClass?: string;
  to: string;
  iconName: any;
  pageName: string;
}

const NavListItem = (props: INavLıstItemProps) => {
  const { to, iconName, customClass, pageName } = props;
  return (
    <NavLink className={`navlist__link${customClass || ""}`} to={to}>
      <FontAwesomeIcon icon={iconName} className={"navlist__icon"} />
      {pageName}
    </NavLink>
  );
};

export default NavListItem;
