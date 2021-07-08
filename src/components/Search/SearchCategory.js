import classes from "./SearchCategory.module.css";

const SearchCategory = () => {
  //implemetar aqui :)
  return (
    <div className={classes.buttonContainer}>
      <h5 className="category">SEARCH BY CATEGORY </h5>
      <button className={classes.conversivel}></button>
      <button className={classes.suv}></button>
      <button className={classes.sport}></button>
      <button className={classes.seda}></button>
    </div>
  );
};

export default SearchCategory;
