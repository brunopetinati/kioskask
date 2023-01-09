import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import MARKET_1 from '../screens/market_1'

const AppRoutes = () => {

  return (
    <AnimatePresence>      
        <Routes>
          <Route exact path="/" element={<MARKET_1 />}/>
        </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;