import styled from "styled-components";

export const MainContent = styled.div`
  width: 1920px;
  height: 2100px;
  background-color: #ffffff;
  position: relative;
  left: 1%;
`;

export const MainContentText = styled.p`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 75px;
`;

export const MainContentBox = styled.div`
  width: 1340px;
  height: 400px;
  background-color: #eee;
  position: relative;

  left: 4%;
`;

export const KeywordBtn = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 28px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0;
  margin-left: 5px;

  &:hover {
    background-color: #2C2C2C;
    color: white;
  }
`;

export const NewsImg = styled.img`
  width: 150px;
  height: 150px;
  background-color: #cecece;
  margin-left: 20px;
`;

export const TodayNewsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  height: 180px;
  border: 1px solid black;
  border-radius: 5px;
  position: absolute;
  left: 5%;
`;