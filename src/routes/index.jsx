import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Header from '../components/Header'
import Footer from '../components/Footer'


import MARKET_1 from '../screens/market_1'

const AppRoutes = () => {

  return (
    <AnimatePresence> 
      <Header />     
        <Routes>
          <Route exact path="/" element={<MARKET_1 />}/>
        </Routes>
        <Footer />
    </AnimatePresence>
  );
};

export default AppRoutes;