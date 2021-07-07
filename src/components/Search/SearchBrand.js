import classes from './SearchBrand.module.css'

const SearchBrand = () => {
    return (
        <div className={classes.buttonContainer_Brand}>
          <h5 className="category">SEARCH BY BRAND</h5>
          <button className={classes.nissan}></button>
          <button className={classes.porsche}></button>
          <button className={classes.subaru}></button>
          <button className={classes.lambo}></button>
          <button className={classes.bmw}></button>
          <button className={classes.audi}></button>
          <button className={classes.citroen}></button>
          <button className={classes.ferrari}></button>
        </div>
    )
}

export default SearchBrand