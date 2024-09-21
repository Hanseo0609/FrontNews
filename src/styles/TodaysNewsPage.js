// styles/StyledComponents.js
import styled from 'styled-components';

export const Container = styled.div``;

export const Options = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Theme1 = styled.div`
  display: flex;
  font-weight: 800;
  font-size: large;
  margin-left: 230px;
  height: 10px;
`;

export const Theme2 = styled.div`
  display: flex;
  margin-left: 230px;
  align-items: end;

  p {
    margin: 0px;
  }
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Search = styled.div`
  margin: 0px 275px 30px 0px;
`;

export const SearchBox = styled.input.attrs({ type: 'text', placeholder: '키워드를 입력해주세요.' })`
  width: 400px;
  height: 30px;
`;

export const Main = styled.div`
  display: flex;
  margin-left: 230px;
`;

export const News = styled.div`
  width: 320px;
  height: 100px;
  border: 0.5px solid black;
  border-radius: 7px;
  display: flex;
  margin: 5px;

  img {
    width: 70px;
    height: 70px;
    margin: 14px;
  }
`;

export const NewsHr = styled.div`
  display: flex;
  margin: auto;
`;

export const Title = styled.p`
  font-weight: 700;
  margin: auto;
  margin-top: 15px;
`;

export const Content = styled.p`
  font-weight: 170;
  margin: auto;
  color: gray;
`;

export const Keyword = styled.div`
  background: rgba(255, 255, 255, 0);
  border-radius: 5px;
  border-style: solid;
  border-color: #000000;
  border-width: 0.5px;
  height: 300px;
  width: 400px;
  position: relative;
  overflow: hidden;
`;

export const Frame = styled.div`
  border-style: solid;
  border-color: #000000;
  border-width: 0px 0px 0.5px 0px;
  width: 1000px;
  height: 45px;
  position: absolute;
  left: 0px;
  top: 0px;
  overflow: hidden;
`;

export const Unnamed = styled.p`
  color: #000000;
  text-align: left;
  font-family: "Inter-SemiBold", sans-serif;
  font-size: 16px;
  line-height: 100%;
  font-weight: 600;
  position: absolute;
  left: 16px;
  top: 14px;
  width: 480px;
  height: 23px;
  margin: auto;
`;
