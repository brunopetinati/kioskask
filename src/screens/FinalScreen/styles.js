import styled from "styled-components";


export const Header = styled.div`
  height: 100%;
  width: 100%;
  background-color: #fff;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 32px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
`;

export const Button = styled.button`
  font-size: 32px;
  width: 80%;
  height: 30%;
  font-family: 'Quicksand';
  border-radius: 18px;
  border: 1px solid #000000;
  background-color: #fff;
  margin-top: 100px;
`;

export const Footer = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const NewOrderButton = styled.button`
  background-color: #1B3D2F;
  font-family: 'Quicksand';
  font-weight: 700;
  font-size: 56.4998px;
  color: #FEF6FF;
  width: 80%;
  height: 80%;
  border-radius: 14px;
`;