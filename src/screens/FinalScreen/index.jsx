import { Header, Container, Button, NewOrderButton, Footer } from './styles'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import { cleanStep } from "../../store/modules/step/actions";
import { useDispatch, useSelector } from "react-redux";

const FinalScreen = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(cleanStep());
    navigate('/');
  };

  return(
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}>
      <Header>GRAZIE</Header>
      <Container>
        <Button>IL VOSTRO ORDINE SARA PRONTO AL BALCONE IN POCHI MINUTI</Button>
        <Button>335689</Button>
      </Container>
      <Footer><NewOrderButton onClick={() => handleClick()} >FAI UN NUOVO ORDINE</NewOrderButton></Footer>
    </motion.div>
  )
};

export default FinalScreen;