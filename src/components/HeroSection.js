import classes from './HeroSection.module.css'
import '../App.css'

const HeroSection = () => {
    return (
        <div className={classes.container}>
            <h2>RENT</h2>
            <h5 className ='HeroSection-Text'>Your dream car awaits you.</h5>
        </div>
    )
}

export default HeroSection;