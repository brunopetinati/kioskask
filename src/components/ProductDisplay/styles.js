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
  width: 100%;
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

export const GramsQuantity = styled.div`
  height: 100%;
  width: 100%; 
`;

export const AggiungiButton = styled.div`
  height: 100%;
  width: 100%;
`;