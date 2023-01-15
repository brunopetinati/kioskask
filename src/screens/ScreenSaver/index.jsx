import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Header, Container, Footer } from './styles'

const ScreenSaver = () => {

  const navigate = useNavigate(); 
  const step = useSelector((state) => state.step)

  const handleClick = () => {
    navigate('/2');
  };

  return(
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
    >
      <Header></Header>
      <Container onClick={() => handleClick()} >
        <h6>BENVENUTO</h6>
        <h1>kioskask</h1>
        <span>{'clicca per iniziare'.toLocaleUpperCase()}</span>
      </Container>
      <Footer></Footer>
    </motion.div>
  )
};

export default ScreenSaver;