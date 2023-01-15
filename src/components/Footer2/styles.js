import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #FEF6FF;
  width: 100%;
  height: ${props => props.thicker ? '135%' : '100%'};
`;

export const Button = styled.div`
  width: 93%;
  height: 25%;
  background: ${props => props.primary ? '#9F7EE7;':'#777084;'};
  border-radius: 14px;
  color: #FEF6FF;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Quicksand';
  font-size: 28px;
  text-align: center;
`;