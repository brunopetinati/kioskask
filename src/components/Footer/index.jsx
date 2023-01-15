import { Container, BiggerContainer, SmallerContainer, OrdinaOraButton, CancellaButton } from './styles'

const Footer = () => {
  return(
  <Container>
    <BiggerContainer>FOOTER</BiggerContainer>
    <SmallerContainer>
      <OrdinaOraButton>ORDINA ORA</OrdinaOraButton>
      <CancellaButton>SVUOTA</CancellaButton>
    </SmallerContainer>
  </Container>
  )
};

export default Footer;