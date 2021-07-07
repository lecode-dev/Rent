import { Link } from "react-router-dom";
import classes from './Menu.module.css'

const Menu = () => {

  return (
    <div>
      <nav className = 'navbar'>
        <div className = 'navbar-container'>
          <Link to="/" className="navbar-logo" >
            RENT <i className ='fab fa-typo3'/>
          </Link>
    
          <ul className={'nav-menu'}>
          <button  className={classes.button} >
                    HOME
                </button>
                <button  className={classes.button} >
                    BUY
                </button>
             <button  className={classes.button} >
                    SELL
                </button>
                <button  className={classes.button} >
                    CONTACT US
                </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
