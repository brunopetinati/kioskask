import { Container, StyledImage, Button } from './styles'
import { useNavigate } from "react-router-dom"; 
import { previousStep } from "../../store/modules/step/actions";
import { useDispatch, useSelector } from "react-redux";

const Header2 = ({back, next}) => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const step = useSelector((state) => state.step)

  const handleClick = () => {

    console.log(step);

    if (step === 2){
      console.log('sim, step', 3)
      dispatch(previousStep());
      navigate('/');
    };
  
    if (step === 3){
      dispatch(previousStep(2));
      navigate('/');
    };
  };

  return(
  <Container>
    <Button onClick={() => handleClick()}>{back}</Button>
    <Button>{next}</Button>
  </Container>
  )
};

export default Header2;