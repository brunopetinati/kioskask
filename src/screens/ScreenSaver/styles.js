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

  h6 {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    margin: 0 auto;
  }

  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-size: 126.125px;
    margin: 0 auto;
  }

  span {
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    margin-top: 200px;
  }
`;



export const Footer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;