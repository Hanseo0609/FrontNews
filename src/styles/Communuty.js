import styled from "styled-components";

export const CommunityHeaderContainer = styled.div`
    display: flex;
    height: 60px;
`;

export const CommunityContainer = styled.div`
    margin: 0px 150px 0px 150px;
    padding: 0px 70px 0px 70px;
    background-color: white;
    height: 1080px;
`;

export const CommunitySelectBox = styled.select`
    border: 1px solid lightgrey;
    border-radius: 5px;
    width: 150px;
    margin: 10px 0px 0px 1200px;
    height: 42px;
`;

export const CommunitySearch = styled.input`
    width: 330px;
    height: 36px;
    margin: 10px 0px 0px 15px;
    border: 1px solid;
    border-radius: 5px;
`;

export const CommunityCotentComent = styled.div`
    display: flex;
`;

export const CommunityCotentComentFont = styled.h3`
    text-align: center;
`

export const HeaderSearchBtn = styled.button`
    background-color: #ffffff;
    width: 30px;
    height: 30px;
    margin: 15px 0px 0px -42px;
    outline:none;
    line-height: 0;
    border: none;
    box-sizing: border-box;
`;

export const HeaderSearchWrapper = styled.div`
    position: absolute;
    left: 24%;
    display: flex;
    align-items: center;
    z-index: 100;
    box-sizing: border-box;
`;

export const WriteBtn = styled.button`
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  position: relative;
  left: 98%;
  top: 85%;
  &:active {
    background-color: #b3b3b3;
  }
`;