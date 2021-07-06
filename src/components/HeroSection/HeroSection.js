import classes from './HeroSection.module.css';
import '../../app.css';

const HeroSection = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.rent}>RENT</h2>
      <h4 className={classes.HeroSectionText}>Your dream car awaits you.</h4>
    </div>
  );
};

export default HeroSection;
