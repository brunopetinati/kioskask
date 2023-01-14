import { Container, BiggerContainer, SmallerContainer, OrdinaOraButton, CancellaButton } from './styles'
import DefaultImage from '../../assets/images/default.png'

const Footer = () => {
  return(
  <Container>
    <BiggerContainer>FOOTER</BiggerContainer>
    <SmallerContainer>
      <OrdinaOraButton>ORDINA ORA</OrdinaOraButton>
      <CancellaButton>CANCELLA</CancellaButton>
    </SmallerContainer>
  </Container>
  )
};

export default Footer;