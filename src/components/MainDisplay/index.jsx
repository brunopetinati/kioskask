import { Container } from './styles'
import SideBar from '../SideBar';
import ProductDisplay from '../ProductDisplay';

const MainDisplay = () => {
  return(
    <Container>
      <SideBar />
      <ProductDisplay />
    </Container>
  )
};

export default MainDisplay;