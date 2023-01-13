import { Container, CardStyle } from './styles';
import DefaultImage from '../../assets/images/default.png'

const ProductCard = () => {
  return(
    <Container>
      <CardStyle>
        <img src={DefaultImage} alt="" />
        <span>CATEGORIA</span>
      </CardStyle>
    </Container>
  );
};

export default ProductCard;