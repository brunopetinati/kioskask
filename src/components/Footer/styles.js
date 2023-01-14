import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr;
  background-color: #EBEBEB;
  width: 100%;
  height: 100%;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

export const BiggerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 95%;
  font-family: 'Quicksand';
  border: 1px solid black;
  background: #fff;
  font-size: 35px;
`;

export const SmallerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: 'Quicksand';
`;

export const OrdinaOraButton = styled.button`
  background: #62BAAC;
  border-radius: 14px;
  height: 45%;
  width: 95%;
  color: #fff;
`;

export const CancellaButton = styled.button`
  background: #623B56;
  border-radius: 14px;
  height: 45%;
  width: 95%;
  color: #fff;
`;

