import { Container, InnerContainer, Info, InnerInfo, ProducPricetDisplay, ProductInfoDisplay, GramsQuantity, AggiungiButton } from './styles'
import DefaultImage from '../../assets/images/default.png'

const ProductDisplay = () => {
    return(
      <Container>
        <InnerContainer>
          <Info>
            <InnerInfo>
              <ProducPricetDisplay>
                <h1 style={{'color':'#F5F5F5'}}>------</h1>
                <img src={DefaultImage} alt="" />
                <h1>€ 0,00</h1>
              </ProducPricetDisplay>
              <ProductInfoDisplay>
                <span>{'Mussum Ipsum, cacilds vidis litro abertis.'.toUpperCase() }</span>
                <span>Auris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.Atirei o pau no gatis, per gatis num morreus.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!</span>
              </ProductInfoDisplay>
            </InnerInfo>
          </Info>
          <GramsQuantity></GramsQuantity>
          <AggiungiButton></AggiungiButton>
        </InnerContainer>
      </Container>
    )
};

export default ProductDisplay;