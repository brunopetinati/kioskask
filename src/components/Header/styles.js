import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #EBEBEB;
  width: 100%;
  height: 100%;
`;

export const StyledImage = styled.img`
  margin-left: 10px;
`;

export const Button = styled.button`
  background: #366085;
  border: 0.43554px solid #000000;
  border-radius: 10.453px;

  width: 110px;
  height: 38px;
  margin-right: 10px;
  
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 700;
  color: #FEF6FF;
  font-size: 24px;
`;