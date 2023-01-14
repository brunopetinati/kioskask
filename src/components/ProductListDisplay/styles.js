import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 312px;
  width: 100%;
  background-color: #FEF6FF;
`;

export const InnerContainer = styled.div`
  border: 1px solid #000000;
  width: 95%;
  height: 95%;
`;

export const Divisor = styled.div`
  height: 256px;
  background-color: #fff;
`;

export const TotalPrice = styled.div`
  background: #00ADC7;
  height: 40px;
  width: 100%;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 26px;
`;