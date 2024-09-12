import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  width: auto;
  justify-content: flex-start;
  align-items: center;
  height: 70px;
  position: relative;
`;

export const HeaderNews = styled.div`
  font-size: 22px;
  margin: 0px 30px 0px 100px;
`;

export const HeaderCommunity = styled.div`
  font-size: 22px;
  margin-right: 30px;
`;

export const HeaderQuiz = styled.div`
  font-size: 22px;
  margin-right: 30px;
`;

export const HeaderSearch = styled.input`
  width: 200px;
  height: 40px;
  border: 1px solid black;
  border-right: none;
  border-radius: 5px 0px 0px 5px;
  transition: width 1s ease;
  outline: none;
  z-index: 100;
  display: flex;
  box-sizing: border-box;
  &:focus {
    width: 300px;
    border-radius: 5px 0px 0px 5px;
  }
`;

export const HeaderSearchBtn = styled.button`
  background-color: #ffffff;
  width: 30px;
  height: 40px;
  margin: 0;
  outline:none;
  font-size: 0;
  line-height: 0;
  border: 1px solid black;
  border-left: none;
  border-radius: 0px 5px 5px 0px; /* 오른쪽을 둥글게 설정 */
  z-index: 100;
  box-sizing: border-box;
`;

export const HeaderSearchWrapper = styled.div`
  position: absolute;
  left: 27%;
  display: flex;
  align-items: center;
  z-index: 100;
  box-sizing: border-box;
`;

export const HeaderRealTimeSearch = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: center;
  width: 300px;
  height: 32px;
  border: 1px solid black;
  border-radius: 5px;
  padding-left: 10px;
  margin-left: 730px;
`;