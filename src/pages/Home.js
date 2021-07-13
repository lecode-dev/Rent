import '../app.css';
import HeroSection from '../components/HeroSection/HeroSection';
import Footer from '../components/Footer/Footer';
import Cards from '../components/Cards/Cards';
import CardItem from '../components/CardItem/CardItem';
import SearchCategory from '../components/Search/SearchCategory';
import SearchBrand from '../components/Search/SearchBrand';
import CardItem_Popular from '../components/MostPopular_Item/CardPopular';
import MostPopular_Carousel from '../components/MostPopular_Item/MostPopular_Carousel';
import CarCarousel from '../components/CarCarousel/CarCarousel';
import Menu from '../components/Menu/Menu'
import Review from '../components/Review/Review';
import '../UI/Button/Button.css'


const Home = () => {
  return (
    <>
      <Menu/>
      <HeroSection />
      <CarCarousel />
      <SearchCategory />
      <SearchBrand />
      <Cards slides={CardItem} />
      <MostPopular_Carousel props={CardItem_Popular}  />
      <Review />
      <Footer />
    </>
  );
};

export default Home;
