import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Home from './pages/Home'
import Comingsoon from './parts/Comingsoon'
import Max from './parts/Max'
import Moviecards from './parts/Moviecards'
import Schedule from './parts/Schedule'
import Subfooter from './Subfooter'


function App() {


  return (
    <>
    <Header/>
   <Home/>
   <Moviecards/>
   <Schedule/>
   <Max/>
   <Comingsoon/>
   <Subfooter/>
   <Footer/>
  
  
    </>
  )
}

export default App
