import { Link } from "react-router-dom";
import classes from "./Menu.module.css";
import { FaBars } from 'react-icons/fa'

const Menu = () => {
  return (
    <div>
      <div className={classes.navbar}>
        <Link to="/">
          <img src="../../images/Rent_logo.svg" className = {classes.logo}/>
          <h2 className ={classes.logoName}>RENT</h2>
        </Link>
        <ul>
          <Link to="/" className={classes.navButton}>
            HOME
          </Link>
          <Link to="/" className={classes.navButton}>
            BUY
          </Link>
          <Link to="/" className={classes.navButton}>
            SELL
          </Link>
          <Link to="/" className={classes.navButton}>
            CONTACT US
          </Link>
        </ul>

      <FaBars className = {classes.FaBars}/>

      </div>
    </div>
  );
};

export default Menu;
