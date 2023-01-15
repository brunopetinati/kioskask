import { Container, InnerContainer, Divisor, TotalPrice } from './styles'
import ItemList from '../ItemList'

const ProductListDisplay2 = () => {
    return(
      <Container>
        <InnerContainer>
          <Divisor>
            <ItemList />
          </Divisor>
          <TotalPrice>€ 0,00</TotalPrice>
        </InnerContainer>
      </Container>
    )
};

export default ProductListDisplay2;