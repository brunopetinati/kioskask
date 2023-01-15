import { Container, StyledImage, Button } from './styles'
import DefaultImage from '../../assets/images/default.png'

const Header2 = ({back, next}) => {
  return(
  <Container>
    <Button>{back}</Button>
    <Button>{next}</Button>
  </Container>
  )
};

export default Header2;