import { Container, InnerContainer } from './styles'
import SideBar from '../SideBar';
import ProductDisplay from '../ProductDisplay';
import ProductListDisplay from '../ProductListDisplay'

const MainDisplayStep1 = () => {
  return(
    <Container>
      <SideBar />
      <InnerContainer>
        <ProductDisplay />
        <ProductListDisplay />
      </InnerContainer>
    </Container>
  )
};

export default MainDisplayStep1;