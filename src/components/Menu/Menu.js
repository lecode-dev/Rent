import { Link } from "react-router-dom";
import classes from "./Menu.module.css";
import * as FaIcons from "react-icons/fa";
import { useState } from "react";

const Menu = () => {
  const [menuToggle, setMenuToggle] = useState(true);

  const MenuMobile = () => setMenuToggle(!menuToggle);
  console.log(MenuMobile);

  return (
    <div>
      <div className={classes.navbar}>
        <Link to="#">
          <img src="../../images/Rent_logo.svg" className={classes.logo} />
          <h2 className={classes.logoName}>RENT</h2>
        </Link>
        <ul>
          <Link className={classes.navButton}>HOME</Link>
          <Link className={classes.navButton}>BUY</Link>
          <Link className={classes.navButton}>SELL</Link>
          <Link className={classes.navButton}>CONTACT US</Link>
        </ul>
        
        <div className={menuToggle ? `${classes.navButton}` : `${classes.navButton} ${classes.hidden}` }>
        <Link to="#" className={classes.FaBars}>
          <FaIcons.FaBars onClick={MenuMobile} />
        </Link>
        </div>

      </div>
    </div>
  );
};

export default Menu;
