import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Header from '../components/Header'
import Footer from '../components/Footer'



import LandingPage from '../screens/LandingPage';
import MARKET_1 from '../screens/market_1'
import MARKET_2 from '../screens/market_2'


const AppRoutes = () => {

  const step = 1;

  return (
    <AnimatePresence>
      {step == 1 && 
      <Routes>
        <Route exact path="/" element={<LandingPage />}/>
      </Routes>
      }
      {step == 2 && 
        <>
          <Header />     
            <Routes>
              <Route exact path="/1" element={<MARKET_1 />}/>
              <Route exact path="/2" element={<MARKET_2 />}/>
            </Routes>
          <Footer />
        </> 
      }
    </AnimatePresence>
  );
};

export default AppRoutes;