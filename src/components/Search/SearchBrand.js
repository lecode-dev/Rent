import CardButton from '../CardButton/CardButton.js'
import classes from './SearchBrand.module.css'

const SearchBrand = () => {
  const images = [
    'Nissan_logo.svg',
    'Citroen_logo.svg',
    'porsche_logo.svg',
    'Subaru_logo.svg',
    'Lambo_logo.svg',
    'bmw_logo.svg',
    'Audi_logo.svg',
    'Ferrari_logo.svg'
  ]
    return (
        <div className={classes.buttonContainer_Brand}>
          <h5 className="category">SEARCH BY BRAND</h5>
          {
            images.map((imagem)=>{
              return(
                <CardButton background={imagem}/>
              ) 
            })
          }
        </div>
    )
}

export default SearchBrand