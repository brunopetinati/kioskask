import { Container, Button } from './styles'
import DefaultImage from '../../assets/images/default.png'

const Header = () => {
  return(
  <Container>
    <img src={DefaultImage} alt="default.png" />
    <h1>HEADER</h1>
    <Button>X ESCI</Button>
  </Container>
  )
};

export default Header;