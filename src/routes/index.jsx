import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import Home from '../screens/home'

const AppRoutes = () => {

  return (
    <AnimatePresence>      
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;