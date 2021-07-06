import '../app.css';
import HeroSection from '../components/HeroSection/HeroSection';
import Footer from '../components/Footer/Footer';
import Cards from '../components/Cards/Cards';
import CardItem from '../components/CardItem/CardItem';
import SearchCategory from '../components/Search/SearchCategory';
import SearchBrand from '../components/Search/SearchBrand';


const Home = () => {
  return (
    <div>
      <HeroSection />
      <SearchCategory />
      <SearchBrand />
      <Cards slides={CardItem} />
      <Footer />
    </div>
  );
};

export default Home;
