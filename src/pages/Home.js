import '../App.css'
import HeroSection from '../components/HeroSection'
import Footer from './Footer'
import Cards from './Cards'
import CardItem from './CardItem'

const Home = () => {
     return (
         <div>
             <HeroSection/>
             <Cards slides={CardItem}/>
             <Footer/>
         </div>
     )
}

export default Home