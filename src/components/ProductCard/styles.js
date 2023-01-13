import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Condensed';
  width: 150px;
  height: 130px;
  background:  #F5F5F5;
`;

export const CardStyle = styled.div`
  height:90%;
  width:90%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;

  img {
    width: 50%;
  }

  span {
    font-size: 22px;
  }
`;