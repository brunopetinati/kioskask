/* SCHERMATA PRODOTTI */
import { motion } from "framer-motion";

import MainDisplayStep2 from '../../components/MainDisplayStep2'
import { Container } from './styles'

const MARKET_2 = () => {
  return(
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
    >
      <Container>
        <MainDisplayStep2 />
      </Container>
    </motion.div>
  )
};

export default MARKET_2;  