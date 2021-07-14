import { Link } from "react-router-dom";
import "./Menu.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";

const Menu = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const MenuMobile = () => setMenuToggle(!menuToggle);
  console.log(MenuMobile);

  return (
    <div>
      <div className={"navbar"}>
        <Link to="#">
          <img src="../../images/Rent_logo.svg" className="logo" />
          <h2 className={"logoName"}>RENT</h2>
        </Link>
        <div className={menuToggle ? "menuContainer" : "menuContainerActive"}>
          <div
            className={`navButtonContainer ${
              menuToggle ? "showButtonContainer" : "menuContainer"
            }`}
          >
            <Link to="#" className={"navButton"}>
              HOME
            </Link>
            <Link to="/" className={"navButton"}>
              BUY
            </Link>
            <Link to="/" className={"navButton"}>
              SELL
            </Link>
            <Link to="/" className={"navButton"}>
            CONTACT US
            </Link>
          </div>

          <div className="menuHamburguer">
            <Link to="#" className={"FaBars"}>
              <FaIcons.FaBars onClick={MenuMobile} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
