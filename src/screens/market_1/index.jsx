import MainDisplayStep1 from '../../components/MainDisplayStep1'
import { Container } from './styles'
import { motion } from "framer-motion";

const MARKET_1 = () => {
  return(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Container>
        <MainDisplayStep1 />
      </Container>
    </motion.div>
  )
};

export default MARKET_1;  