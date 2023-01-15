import { Container, InnerContainer } from './styles'
import SideBar from '../SideBar';
import ProductDisplay2 from '../ProductDisplay2';
import ProductListDisplay from '../ProductListDisplay'

const MainDisplayStep2 = () => {
  return(
    <Container>
      <SideBar />
      <InnerContainer>
        <ProductDisplay2 />
      </InnerContainer>
    </Container>
  )
};

export default MainDisplayStep2;