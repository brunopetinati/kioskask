import { Container } from './styles'
import SideBar from '../SideBar';
import ProductDisplay from '../ProductDisplay';
import ProductListDisplay from '../ProductListDisplay'

const MainDisplay = () => {
  return(
    <Container>
      <SideBar />
      <div>
        <ProductDisplay />
        <ProductListDisplay />
      </div>
    </Container>
  )
};

export default MainDisplay;