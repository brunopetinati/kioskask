import { Container, BiggerContainer, SmallerContainer, OrdinaOraButton, CancellaButton } from './styles'
import { nextStep, cleanStep } from "../../store/modules/step/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 

const Footer = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(nextStep(2));
    navigate('/4');
  };

  const handleSvuotaClick = () => {
    dispatch(cleanStep());
    navigate('/');
  };

  return(
  <Container>
    <BiggerContainer>FOOTER</BiggerContainer>
    <SmallerContainer>
      <OrdinaOraButton onClick={() => handleClick()}>ORDINA ORA</OrdinaOraButton>
      <CancellaButton onClick={() => handleSvuotaClick()}>SVUOTA</CancellaButton>
    </SmallerContainer>
  </Container>
  )
};

export default Footer;