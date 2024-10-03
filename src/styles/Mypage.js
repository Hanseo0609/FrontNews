import { type } from '@testing-library/user-event/dist/type';
import styled from 'styled-components';

export const MypageContainer = styled.div`
    margin-top: 40px;
    padding: 0px 150px 0px 150px;
`;

export const MypageHeader = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

export const MypageHeaderBtn = styled.p`
    font-weight: bold;
    display: flex;
    align-items: end;
    margin: 0px;
    font-size: 18px;
    margin-right: 20px;
    color: #b3b3b3;
`;

export const MypageStatus = styled.div`
    background-color: #D2AC10;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0px 15px 0px 15px;
    font-weight: bold;
    font-size: 17px;
`;

export const RecommendContainer = styled.div`
    display: flex;
`;

export const RecommendFirstBox = styled.div`
    width: 900px;
    height: 150px;
    border: 1px solid black;
    border-right: none;
    margin-top: 20px;
    justify-content: space-between;
    padding-left: 15px;
`;

export const RecommendSecondBox = styled.div`
    width: 700px;
    height: 150px;
    border: 1px solid black;
    margin-top: 20px;
`;

export const PreferenceBtn = styled.button`
    margin-right: 10px;
    width: 360px;
    font-size: 24px;
    border: 1px solid #D2AC10;
    border-radius: 30px;
    background-color: transparent;
    color: #D2AC10;
    font-weight: bold;
`;

export const MypageActivityContainer = styled.div`
    display: flex;
`;

export const MypageActStorage = styled.div`
    width: 920px;
    height: 360px;
`;

export const ActStorageText = styled.p`
    color: #d2ac10;
    margin-top: 5px;
    font-size: 21px;
    font-weight: bold;
`;

export const MypageActStorageDetail = styled.div`
    display: flex;
`;

export const MypageActStorageDetails = styled.div`
    width: 420px;
    height: 40px;
    margin: 15px 10px 0px 0px;
    color: #666666;
    display: flex;
    align-items: center;
`;

export const MypageActDetailsBtn = styled.button`
    width: 100px;
    height: 30px;
    background-color: #bbbbbb;
    border: none;
    border-radius: 30px;
    color: white;
    font-size: 20px;
    margin-left: 230px;
`;

export const MypageActComment = styled.div`
    width: 700px;
    height: 300px;
    margin-left: 20px;
`;

export const MypageKeywordContainer = styled.div`
    display:flex;
    align-items:center;
`

export const MypageKeywordCheckbox = styled.input`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #d0d5dd;
    position: relative;
    transition: all 0.3s;
    appearance: none;
    margin-right: 30px;

    &:checked {
        background-color: black;
        border: 1px solid black;
    }

    &:checked::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        border: 3px solid white;
        border-radius: 50%;
        background-color: transparent;
        transform: translate(-50%, -50%);
  }
`;

export const UserInfoContainer = styled.div`
    display: flex;
    margin-top: 10px;
`;

export const UserInfo = styled.p`
    margin-left: 30px;
    font-weight: 500;
    width: 250px;
`;

export const UserInfoUpdate = styled.a`
    margin-top: 16px;
    margin-left: 100px;
    text-decoration: underline;
    color: #69CBFB;
`;

export const PasswordUpdateBtn = styled.button`
    margin-left: 30px;
    margin-top: 12px;
    width: 150px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid;
`;

export const Newsletter = styled.p`
    margin-right: 10px;
    width: 150px;
`;