import { Link } from "react-router-dom";
import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <div>
      <div className={classes.navbar}>
        <ul>
          
          <Link className={classes.navButton}>HOME</Link>
          <Link className={classes.navButton}>BUY</Link>
          <Link className={classes.navButton}>SELL</Link>
          <Link className={classes.navButton}>CONTACT US</Link>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
