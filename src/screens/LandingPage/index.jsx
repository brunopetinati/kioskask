import { Header, Container, Button, Footer } from './styles'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import { nextStep } from "../../store/modules/step/actions";
import { useDispatch, useSelector } from "react-redux";

const LandingPage = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const step = useSelector((state) => state.step)

  const handleClick = () => {
    dispatch(nextStep(1));
    navigate('/');
  };

  return(
    <>
      <Header>SCHEGLI IL REPARTO</Header>
      <Container>
        <Button onClick={() => handleClick()}>PRODOTTI DAL BALCONE</Button>
        <Button>PIATTI PRONTI</Button>
      </Container>
      <Footer></Footer>
    </>
  )
};

export default LandingPage;