import * as styleD from '../styles/FindMyInfo';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import { useState } from 'react';
import axios from 'axios';

export default function FindMyId() {

    const serverURL = process.env.REACT_APP_SERVER_URL;

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    function onChangeName(event) {
        setName(event.target.value);
    }

    function onChangePhoneNumber(event) {
        setPhoneNumber(event.target.value);
    }

    async function postFindId() {
        try {
            const response = await axios.post(`${serverURL}/users/findID`, {
                user_name: name,
                user_number: phoneNumber
            });
            console.log(response)
            alert(`아이디는 ${response.data['email']}입니다.`)
        } catch (error) {
            console.log(error);
            alert('값이 올바르지 않습니다.');
        }


    }

    return (
        <div>
            <Navbar status="400" />

            <styleD.FindMyIdBorder>
                <styleD.FindMyIdTitle>아이디 찾기</styleD.FindMyIdTitle>
                <styleD.FindMyIdHr />
                <styleD.FindMyIdContent>
                    <div>

                        <styleD.NameInput>
                            <p>이름</p>
                            <input type="text" placeholder="이름을 입력해주세요." onChange={onChangeName} />
                        </styleD.NameInput>
                        <styleD.NumberInput>
                            <p>전화번호</p>
                            <input type="number" placeholder="전화번호를 입력해주세요." onChange={onChangePhoneNumber} />
                        </styleD.NumberInput>
                        <div>
                            <a href="/LoginPage" style={{ marginLeft: '5%' }}>로그인으로 돌아가기</a>
                            <styleD.FindMyIdButton type="submit" onClick={postFindId}>다음</styleD.FindMyIdButton>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <styleD.FindMyIdVideo autoPlay muted src="/source/recaptcha.mp4" />
                    </div>
                </styleD.FindMyIdContent>

            </styleD.FindMyIdBorder>
        </div>
    )
}
