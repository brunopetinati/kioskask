import { Container } from './styles'
import ProductCard from '../ProductCard';

const SideBar = () => {
    return(
      <Container>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Container>
    )
};

export default SideBar;