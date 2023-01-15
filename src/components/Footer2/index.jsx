import { Container, Button } from './styles'
import { useNavigate } from "react-router-dom"; 
import { cleanStep, previousStep } from "../../store/modules/step/actions";
import { useDispatch, useSelector } from "react-redux";

const Footer2 = ({primary = false, text, thicker}) => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const step = useSelector((state) => state.step)

  console.log(step)

  const handleClick = () => {

    if(step == 2){
      dispatch(previousStep());
      navigate('/');
      return
    };

    dispatch(cleanStep());
    navigate('/3');
  };

  return(
      <Container thicker={thicker}>
        <Button primary={primary} onClick={() => handleClick()}>{text}</Button>
      </Container>
  )
};

export default Footer2;