import classes from './Footer.module.css'
import { FaLinkedin, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className={classes.footerContainer}>
            <p className ={classes.footerText}>Rent - Rua das laranjas - Orangetown - MG</p>
            <Link className = {classes.linkFooter}>
            <FaLinkedin /> <FaTwitter/> <FaFacebookF/> <FaInstagram />
            </Link>
        </div>
    )
}

export default Footer