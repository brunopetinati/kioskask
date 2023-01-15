import { Container, CardStyle } from './styles';
import DefaultImage from '../../assets/images/default.png'
import { useNavigate } from "react-router-dom"; 
import { nextStep } from "../../store/modules/step/actions";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const step = useSelector((state) => state.step)

  const handleClick = () => {
    dispatch(nextStep(1));
    navigate('/3');
  };

  return(
    <Container onClick={() => handleClick()}>
      <CardStyle>
        <img src={DefaultImage} alt="" />
        <span>CATEGORIA</span>
      </CardStyle>
    </Container>
  );
};

export default ProductCard;