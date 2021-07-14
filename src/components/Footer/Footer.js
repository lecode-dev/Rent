import classes from "./Footer.module.css";
import {
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <p className={classes.footerText}>
        Rent - Rua das laranjas - Orangetown - MG
      </p>
      <nav className={classes.linkFooter}>
        <a href="https://www.linkedin.com/company/lecodedev/" target="_blank">
          <FaLinkedin />
        </a>
        <FaTwitter />
        <FaFacebookF />
        <a href="https://www.instagram.com/lecode_dev/" target="_blank">
        <FaInstagram />
        </a>
        
      </nav>
    </div>
  );
};

export default Footer;
