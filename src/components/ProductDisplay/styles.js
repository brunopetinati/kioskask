import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 69%;
  width: 100%;
  background-color: #FEF6FF;
`;

export const InnerContainer = styled.div`
  border: 1px solid #000000;
  border-radius: 22px;
  width: 95%;
  height: 95%;
  display: grid;
  grid-template-rows: 3fr 3fr 2fr;
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

export const GramsQuantityDisplay = styled.div`
  height: 100%;
  width: 100%; 
  display: grid;
  grid-template-rows: 5fr 1fr;
  margin-top: 40px;
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
`;

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
  margin-top: 25px;
  font-family: 'Roboto Condensed';
  font-style: normal;
  font-weight: 400;
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
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-family: 'Roboto Condensed';
  font-size: 24px;
`;

export const PlusSignButton = styled.button`
  background-color: white;
  width: 20px;
  height: 4px;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 700;
`;

export const VerticalDiv = styled.div`
  background-color: white;
  width: 12px;
  height: 7px;
  transform: rotate(90deg);
`;

export const MinusSignButton = styled.button`
  background-color: #fff;
  width: 18px;
  height: 4px;
  border: none;
`;

export const AggiungiButton = styled.div`
  height: 40%;
  width: 80%;
  background: #62BAAC;
  border-radius: 14px;
  justify-self: center;
  align-self: flex-end;
  margin-bottom: 40px;
  font-family: 'Quicksand';
  font-size: 30px;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;