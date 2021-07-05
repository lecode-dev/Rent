import '../app.css';
import HeroSection from '../components/HeroSection/HeroSection';
import Footer from '../components/Footer/Footer';
import Cards from '../components/Cards/Cards';
import CardItem from '../components/CardItem/CardItem';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Cards slides={CardItem} />
      <Footer />
    </div>
  );
};

export default Home;
