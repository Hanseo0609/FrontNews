import styled from 'styled-components';

export const Title = styled.p`
  font-size: 70px;
  font-weight: bold;
  margin-left: 15%;
  margin-bottom: 10px; // 제목과 날짜 사이의 간격을 조절합니다
`;

export const Date = styled.p`
  font-size: 15px;
  color: #808080;
  margin-left: 15%;
  margin-top: 0; // 날짜를 제목에 더 가깝게 붙입니다
`;

export const Content = styled.p`
  font-size: 28px;
  color: #000000;
  margin-left: 15%;
`;

export const Headliner = styled.hr`
  width: 70%;
  height: 0%.5;
  margin-left: 15%;
  margin-right: 15%;
  background-color: #808080;
`;

export const liner = styled.hr`
  width: 100%;
  height: 0.2px;
  background-color: #808080;
`;
