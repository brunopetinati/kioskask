import { Container, 
  InnerContainer, 
  Info, 
  InnerInfo, 
  ProducPricetDisplay, 
  ProductInfoDisplay, 
  GramsQuantityDisplay, 
  SelectGrams, 
  ButtonsContainer,
  GramDisplay,
  SmallGramButton, 
  GramButton,
  PlusIconButton,
  PlusIconMinorButton,
  MinusGramSignButton,
  MinusSignButton, 
  ButtonsFooterContainer,
  AggiungiButton
 } from './styles'
import DefaultImage from '../../assets/images/default.png'
import PlusIcon from '../../assets/icons/add.png'

const ProductDisplay2 = () => {
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
          <GramsQuantityDisplay>
            <SelectGrams>
              <ButtonsContainer>
                <SmallGramButton>
                  <MinusSignButton />
                  <span>10 g</span>
                  <PlusIconMinorButton src={PlusIcon} alt="" />
                </SmallGramButton>
                <SmallGramButton>
                  <MinusSignButton />
                  <span>50 g</span>
                  <PlusIconMinorButton src={PlusIcon} alt="" />
                </SmallGramButton><SmallGramButton>
                  <MinusSignButton />
                  <span>100 g</span>
                  <PlusIconMinorButton src={PlusIcon} alt="" />
                </SmallGramButton><SmallGramButton>
                  <MinusSignButton />
                  <span>500 g</span>
                  <PlusIconMinorButton src={PlusIcon} alt="" />
                </SmallGramButton>
              </ButtonsContainer>
              <GramDisplay>100g</GramDisplay>
            </SelectGrams>
            <GramButton>
              <MinusGramSignButton />
                1
              <PlusIconButton src={PlusIcon} alt="" />
            </GramButton>
          </GramsQuantityDisplay>
            <ButtonsFooterContainer>
              <AggiungiButton>AGGIUNGI</AggiungiButton>
              <AggiungiButton>PERSONALIZZA</AggiungiButton>
            </ButtonsFooterContainer>
        </InnerContainer>
      </Container>
    )
};

export default ProductDisplay2;