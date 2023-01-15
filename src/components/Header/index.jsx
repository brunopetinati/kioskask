import { Container, StyledImage, Button } from './styles'
import DefaultImage from '../../assets/images/default.png'
import { useNavigate } from "react-router-dom"; 
import { cleanStep } from "../../store/modules/step/actions";
import { useDispatch, useSelector } from "react-redux";


const Header = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  //const step = useSelector((state) => state.step)

  const handleClick = () => {
    dispatch(cleanStep());
    navigate('/');
  };

  return(
  <Container>
    <StyledImage src={DefaultImage} alt="default.png" />
    <h1>HEADER</h1>
    <Button onClick={() => handleClick()}>X ESCI</Button>
  </Container>
  )
};

export default Header;