import classes from "./Review.module.css";
import image_thomas from "../../images/image_thomas.svg";

function Review() {
  return (
    <div className={classes.thomasContainer}>
        <div className = {classes.thomasImage} />
      <h3 className = {classes.thomasTitle}>Thomas Schinyder</h3>
      <p className = {classes.thomasText}>Definitely the best place to get your dream car and hit the road.</p>
      <img src={image_thomas} className={classes.thomas} />
    </div>
  );
}

export default Review;
