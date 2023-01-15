import { Header, Container, Button, Footer } from './styles'

const ScreenSaver = () => {

  return(
    <>
      <Header></Header>
      <Container>
        <h6>BENVENUTO</h6>
        <h1>kioskask</h1>
        <span>{'clicca per iniziare'.toLocaleUpperCase()}</span>
      </Container>
      <Footer></Footer>
    </>
  )
};

export default ScreenSaver;