import styled from 'styled-components';

export const FindMyIdBorder = styled.div`
    width: 60%;
    height: 600px;
    border: 4px solid gray;
    margin-left: 20%;
    margin-top: 5%;
    border-radius: 20px;
`;

export const FindMyIdContent = styled.div`
    display: flex;
`;
export const FindMyIdTitle = styled.p`
    font-size: 30px;
    font-weight: bold;
    margin-top: 5%;
    text-align: left;
    margin-left: 5%;
`;

export const NumberInput = styled.div`
    display: flex;
    margin-left: 5%;    
    margin-top: 2%;
    p {
        font-weight: bold;
        margin: 5px 20px 0 0;
        width: 120px;
    }

    input {
        width: 400px;
        height: 30px;
        border: 1px solid black;
        border-radius: 10px;
        padding-left: 10px;
    }
`;

export const PasswordInput = styled.div`
    display: flex;
    margin-left: 5%;    
    margin-top: 2%;
    p {
        font-weight: bold;
        margin: 5px 20px 0 0;
        width: 120px;
    }

    input {
        width: 400px;
        height: 30px;
        border: 1px solid black;
        border-radius: 10px;
        padding-left: 10px;
    }
`;

export const NameInput = styled.div`
    display: flex;
    margin-left: 5%;
    margin-top: 10%;
    p {
        font-weight: bold;
        margin: 5px 20px 0 0;
        width: 120px;
    }

    input {
        width: 400px;
        height: 30px;
        border: 1px solid black;
        border-radius: 10px;
        padding-left: 10px;
    }
`;

export const FindMyIdButton = styled.button`
    width: 200px;
    height: 30px;
    border: 1px solid black;
    border-radius: 10px;
    margin-left: 33%;
    margin-top: 5%;
    font-weight: bold;
`;

export const FindMyIdHr = styled.hr`
    height: 2px;
    background-color: gray;
    border: none;
`;

export const FindMyIdVideo = styled.video`
    width: 400px;
    height: 200px;
    margin-left: 150px;
`;

export const FIndPasswordText = styled.p`
	color: gray;
    font-size: 10px;
`;