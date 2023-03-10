import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Header from '../components/Header'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'
import Footer2 from '../components/Footer2'
import { useDispatch, useSelector } from "react-redux";



import ScreenSaver from '../screens/ScreenSaver';
import LandingPage from '../screens/LandingPage';
import FinalScreen from '../screens/FinalScreen';
import MARKET_1 from '../screens/market_1'
import MARKET_2 from '../screens/market_2'
import MARKET_3 from '../screens/market_3'
import MARKET_4 from '../screens/market_4'



const AppRoutes = () => {

  const step = useSelector((state) => state.step)

  return (
    <AnimatePresence>
      {step === 0 && 
      <Routes>
        <Route exact path="/" element={<ScreenSaver />}/>
        <Route exact path="/2" element={<LandingPage />}/>
        <Route exact path="/3" element={<FinalScreen />}/>
      </Routes>
      }
      {step === 1 && 
        <>
          <Header />     
            <Routes>
              <Route exact path="/" element={<MARKET_1 />}/>
              <Route exact path="/2" element={<MARKET_2 />}/>
            </Routes>
          <Footer />
        </> 
      }
      {step === 2 &&
        <>
          <Header2 back={'< TORNA'} next={'AVANTI >'}/>
          <Routes>
            <Route exact path="/3" element={<MARKET_3 />}/>
          </Routes>
          <Footer2 primary={true} thicker={true} text={'TORNA AL MENU, VOGLIO SCIEGLIERE ALTRE COSE'}/>
        </>
      }
      {step === 3 &&
        <>
          <Header2 back={'< VAI AI PRODOTTI'} next={'FINE >'}/>
            <Routes>
              <Route exact path="/4" element={<MARKET_4 />}/>
            </Routes>
          <Footer2 text={'CONFERMA ORDINE'}/>
        </>
      }
    </AnimatePresence>
  );
};

export default AppRoutes;