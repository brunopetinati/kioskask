import { Container } from './styles';
import DefaultImage from '../../assets/images/default.png'

const ProductCard = () => {
  return(
    <Container>
      <img src={DefaultImage} alt="" />
      <h3>CATEGORIA</h3>
    </Container>
  );
};

export default ProductCard;