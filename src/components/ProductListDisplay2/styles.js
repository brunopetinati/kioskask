import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background-color: #FEF6FF;
`;

export const InnerContainer = styled.div`
  border: 1px solid #000000;
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
`;

export const Divisor = styled.div`
  height: 750px;
  background-color: #fff;
`;

export const TotalPrice = styled.div`
  background: #00ADC7;
  height: 61px;
  width: 98%;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-self: center;
  align-self: center;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 36px;
  font-family: 'Quicksand';
`;