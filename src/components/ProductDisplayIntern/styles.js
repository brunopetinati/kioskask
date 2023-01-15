import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #FEF6FF;
`;

export const InnerContainer = styled.div`
  border: 1px solid #000000;
  border-radius: 22px;
  width: 95%;
  height: 95%;
  display: grid;
  grid-template-rows: 4fr 3fr 7fr 1fr;
`;

export const Info = styled.div`
  height: 100%;
  width: 80%;
  justify-self: center;
`;

export const InnerInfo = styled.div`
  display: grid;
  grid-template-rows: 3fr 2fr;
`;

export const ProducPricetDisplay = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  font-family: 'Quicksand';

  img {
    width: 35%;
  }
`;
 
export const ProductInfoDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Quicksand';

  span:nth-child(1){
    font-size: 24px;
    margin: 0 10px 0 10px;
  }

  span:nth-child(2){
    font-size: 11px;
    margin: 0 10px 0 10px;
  }
`;

export const SwipperDisplay = styled.div`
  height: 95%;
  width: 95%;
  border: 1px solid black;
  align-self: center;
  justify-self: center;
`;

export const ProductVariationDisplay = styled.div`
  display: grid;
  grid-template-columns: 3fr 6fr;
  width: 100%;
  height: 100%;
  align-items: flex-start;
`;

export const ProductPhotoViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  height: 83%;
  border: 1px solid black;
  margin: 30px 0 0 15px;

  span:nth-child(1) {
    font-family: 'Roboto Condensed';
    font-size: 30px;
  }

  span:nth-child(3) {
    font-family: 'Quicksand';
    font-size: 30px;
  }
`;

export const GramsQuantityDisplay = styled.div`
  height: 100%;
  width: 100%; 
  display: grid;
  grid-template-rows: 6fr 1fr 4fr;
`;



export const SelectGrams =  styled.div`
  height: 100%;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-self: center;
  align-items: flex-start;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 15px;
`;

export const GramDisplay = styled.div`
  height: 60%;
  width: 100%;
  margin-left: 10px;
  background: #D3CBE1;
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 55px;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
  margin-top: 27px;
`;

export const PriceView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-family: 'Quicksand';
  font-size: xxx-large;
`

export const SmallGramButton = styled.div`
  width: 150px;
  height: 22px;
  margin-top: 16px;
  background: #366085;
  border: 0.294677px solid #000000;
  border-radius: 7.07226px;
  justify-self: center;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: 400;
  font-family: 'Roboto Condensed';
  font-size: 16px;
`;



export const GramButton = styled.div`
  width: 80%;
  height: 100%;
  background: #366085;
  border: 0.613641px solid #000000;
  border-radius: 14.7274px;
  justify-self: center;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: 400;
  font-family: 'Roboto Condensed';
  font-size: 24px;
`;

export const MinusGramSignButton = styled.button`
  background-color: #fff;
  width: 40px;
  height: 12px;
  border: none;
  border-radius: 3px;
`;

export const PlusIconButton = styled.img`
  width: 40px;
  height: 40px;
`;


export const PlusIconMinorButton = styled.img`
  width: 18px;
  height: 18px;
`;

export const MinusSignButton = styled.button`
  background-color: #fff;
  width: 18px;
  height: 6px;
  border: none;
  border-radius: 1px;
`;

export const ButtonsFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 95%;
  justify-self: center;
  background: purple;
`

export const AggiungiButton = styled.div`
  height: 100%;
  width: 90%;
  background: #62BAAC;
  border-radius: 14px;
  justify-self: center;
  align-self: flex-end;
  font-family: 'Quicksand';
  font-size: 25px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;