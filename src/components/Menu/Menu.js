import { Link } from "react-router-dom";
import classes from "./Menu.css";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";

const Menu = () => {
  const [menuToggle, setMenuToggle] = useState(true);

  const MenuMobile = () => setMenuToggle(!menuToggle);
  console.log(MenuMobile);

  return (
    <div>
      <div className={"navbar"}>
        <Link to="#">
          <img src="../../images/Rent_logo.svg" className={classes.logo} />
          <h2 className={"logoName"}>RENT</h2>
        </Link>

        <ul className={"menuContainer"}>
          <div className={menuToggle ? "menuContainer" : "menuContainerActive"}>
            <Link to="#" className={"FaBars"}>
              <FaIcons.FaBars onClick={MenuMobile} />
            </Link>
          </div>
          <Link className={"navButton"}>HOME</Link>
          <Link className={"navButton"}>BUY</Link>
          <Link className={"navButton"}>SELL</Link>
          <Link className={"navButton"}>CONTACT US</Link>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
