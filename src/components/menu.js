import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    return setClick(!click);
  };

  const closeMobileMenu = () => {
      return setClick (false)
  }

  return (
    <div>
      <nav>
        <div>
          <Link to="/" className="navbar-logo" onClick={clickHandler}>
            RENT <i className ='fab fa-typo3'/>
          </Link>
          <div className="menu-icon">
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    HOME
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    BUY
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    SELL
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    CONTACT US
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
