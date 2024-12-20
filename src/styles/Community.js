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
    border: 1px solid;
    margin-top: 20px;
`;

export const CommunityCotentComentFont = styled.h3`
    text-align: center;
    text-decoration-line: none;
    color: black;
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
  &:active {
    background-color: #b3b3b3;
  }
`;

export const WriteHeader = styled.div`
    display: flex;
`;

export const SelectCategoryBox = styled.select`
    border: 1px solid lightgrey;
    border-radius: 5px;
    width: 150px;
    height: 42px;
    margin: 10px 0px 0px 20px;
`;

export const WriteTitle = styled.input`
    border: 1px solid lightgrey;
    border-radius: 5px;
    height: 35px;
    width: 600px;
    margin: 10px 0px 0px 58px;
`;

export const WriteContent = styled.div`
    margin: 50px 0px 0px 0px;
`;

export const WriteSubmitBtn = styled.button`
    margin: 30px 0px 0px 0px;
    height: 35px;
    background-color: #eaede6;
    border: 1px solid #eaede6;
    border-radius: 5px;
    &:active {
    background-color: #b3b3b3;
  }
`;

export const PostHeader = styled.div`
    padding: 30px 0px 0px 0px;
`;

export const PostWrapper = styled.div`

`;

export const PostTitleBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    margin: 60px 0px 30px 240px;
`;

export const PostTitle = styled.h1`
    font-size: 48px;
    margin: 0px;
`;

export const PostDate = styled.p`
    margin-right: 24px;
    float: right;
`;

export const PostContentBox = styled.div`
    margin: 20px 0px 0px 240px;
`;

export const PostContent = styled.p`
    font-size: 30px;
`;

export const PostSearch = styled.p`
    font-size: 16px;
    float: right;
`;

export const PostHeaderBox = styled.div`
    display: flex;
    margin-right: 240px;
`;