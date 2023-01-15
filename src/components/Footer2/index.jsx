import { Container, Button } from './styles'

const Footer2 = ({primary = false, text}) => {
  return(
  <Container>
    <Button primary={primary}>{text}</Button>
  </Container>
  )
};

export default Footer2;