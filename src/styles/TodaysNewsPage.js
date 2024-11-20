// styles/StyledComponents.js
import styled from 'styled-components';

export const Container = styled.div`
`;

export const TodaysNewsContainer = styled.div`
  display: flex;
  p {
    font-size: 1.5rem;
    margin: 30px 20px 10px 0;
  }
  p.selected {
    font-weight: bold;
  }
`;

export const NewsContainer = styled.div`
  margin-left: 140px;
`;

export const NewsCategoryContainer = styled(TodaysNewsContainer)`
  p {
    font-size: 1rem;
    margin: 0 10px 0 0;
  }
`;
export const NewsBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  div:nth-child(odd) {
    margin-left: 0;
  }
`;
export const NewsBox = styled.div`
  display: flex;
  width: 750px;
  height: 210px;
  border: 0.7px solid gray;
  margin: 15px;
  border-radius: 10px;
  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
  }
`;

export const NewsImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

export const NewsTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NewsContent = styled.p`
  font-size: 1.2rem;
  color: gray;
`;

export const ArticleTitle = styled.p`
  font-weight: bold;
  width: 500px;
  font-size: 27px;
`;

export  const ArticalContent = styled.p`
  width: 500px;
  height: 200px;
`;

export const Pagination = styled.div`
  display: flex;
  margin-right: 200px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  button {
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    background: #f1f1f1;
    cursor: pointer;
    font-size: 16px;
  }

  button.active {
    background: #007bff;
    color: white;
    font-weight: bold;
  }

  button:hover {
    background: #d1d1d1;
  }
`;