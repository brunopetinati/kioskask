import { Container, Button } from './styles'

const Footer2 = ({primary = false, text, thicker}) => {
  return(
  <Container thicker={thicker}>
    <Button primary={primary}>{text}</Button>
  </Container>
  )
};

export default Footer2;