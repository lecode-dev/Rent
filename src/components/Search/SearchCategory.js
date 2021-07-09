import classes from "./SearchCategory.module.css";
import CardButton from "../CardButton/CardButton";

const SearchCategory = () => {
  const imagesCategory = [
    "mini_carro_1.svg",
    "mini_carro_2.svg",
    "mini_carro_3.svg",
    "mini_carro_4.svg",
  ];
  return (
    <div>
      <h5 className="category">SEARCH BY CATEGORY</h5>
      <div className={classes.buttonContainer_Category}>
        {imagesCategory.map((imagem) => {
          return <CardButton background={imagem} />;
        })}
      </div>
    </div>
  );
};

export default SearchCategory;
