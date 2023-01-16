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
  MinusGramSignButton,
  PlusIconButton,
  PlusIconMinorButton,
  MinusIconButton, 
  AggiungiButton } from './styles'
import DefaultImage from '../../assets/images/default.png'
import PlusIcon from '../../assets/icons/add.png'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import { addGrams,removeGrams } from '../../store/modules/grams/actions';

const ProductDisplay = () => {

  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const grams = useSelector((state) => state.grams);

  const handleClick = () => {
    navigate('/2');
  };

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
                <MinusIconButton onClick={() => dispatch(removeGrams(10))}/>
                <span>10 g</span>
                <PlusIconMinorButton src={PlusIcon} alt="" onClick={() => dispatch(addGrams(10))} />
              </SmallGramButton>
              <SmallGramButton>
                <MinusIconButton onClick={() => dispatch(removeGrams(50))}/>
                <span>50 g</span>
                <PlusIconMinorButton src={PlusIcon} alt="" onClick={() => dispatch(addGrams(50))} />
              </SmallGramButton><SmallGramButton>
                <MinusIconButton onClick={() => dispatch(removeGrams(100))}/>
                <span>100 g</span>
                <PlusIconMinorButton src={PlusIcon} alt="" onClick={() => dispatch(addGrams(100))} />
              </SmallGramButton><SmallGramButton>
                <MinusIconButton onClick={() => dispatch(removeGrams(500))}/>
                <span>500 g</span>
                <PlusIconMinorButton src={PlusIcon} alt="" onClick={() => dispatch(addGrams(500))} />
              </SmallGramButton>
            </ButtonsContainer>
            <GramDisplay>{grams}g</GramDisplay>
          </SelectGrams>
          <GramButton>
            <MinusGramSignButton onClick={() => dispatch(removeGrams(1))}/>
            1
            <PlusIconButton src={PlusIcon} alt="" onClick={() => dispatch(addGrams(1))}/>
          </GramButton>
        </GramsQuantityDisplay>
        <AggiungiButton onClick={() => handleClick()}>AGGIUNGI</AggiungiButton>
      </InnerContainer>
    </Container>
  )
};

export default ProductDisplay;