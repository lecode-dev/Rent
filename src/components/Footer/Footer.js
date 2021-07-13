import classes from './Footer.module.css'
import { FaLinkedin, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className={classes.footerContainer}>
            <p className ={classes.footerText}>Rent - Rua das laranjas - Orangetown - MG</p>
            <nav className = {classes.linkFooter}>
            <FaLinkedin />
             <FaTwitter/>
              <FaFacebookF/> 
              <FaInstagram />
            </nav>
        </div>
    )
}

export default Footer