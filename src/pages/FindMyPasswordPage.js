import * as styleD from '../styles/FindMyInfo';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

export default function FindMyPassword() {

    const serverURL = process.env.REACT_APP_SERVER_URL;

    const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');

    function onChangeId(event) {
        setId(event.target.value);
    }

    function onChangeName(event) {
        setName(event.target.value);
    }

    function onChangePhoneNumber(event) {
        setPhoneNumber(event.target.value);
    }

    function onChangePassword(event) {
        setPassword(event.target.value);
    }

    function onChangeConfirmPassword(event) {
        setConfirmPassword(event.target.value);
    }

    async function postChangePassword() {
        if (passwordRegEx.test(password) && password == confirmPassword) {
            try {
                const response = await axios.post(`${serverURL}/users/resetPassword`, {
                    user_email: id,
                    user_name: name,
                    user_number: phoneNumber,
                    new_password: password
                })
                if (response.data['status'] === 201) {
                    alert('비밀번호 변경 완료');
                    document.location.href('/LoginPage');
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('값이 올바르지 않습니다.')
        }
    }

    function passwordCheck() {
        if (password != "") {
            return (
                <div>
                    {passwordRegEx.test(password) ?
                        <styleD.FIndPasswordText>올바른 비밀번호입니다.</styleD.FIndPasswordText> :
                        <styleD.FIndPasswordText>올바른 형식으로 입력해 주세요.</styleD.FIndPasswordText>}
                </div>
            )
        } else {
            return (
                <div>
                    <styleD.FIndPasswordText>비밀번호는 영문, 숫자를 혼합하여 8~20자로 입력해주세요</styleD.FIndPasswordText>
                </div>
            )
        }
    }


    function passwordDoubleCheck() {
        if (password != "" && confirmPassword != "") {
            return (
                <div>
                    {password === confirmPassword ?
                        <styleD.FIndPasswordText>비밀번호가 일치합니다.</styleD.FIndPasswordText> :
                        <styleD.FIndPasswordText>비밀번호가 일치하지 않습니다</styleD.FIndPasswordText>}
                </div>
            )
        }
    }

    return (
        <>
            <Navbar status="400" />

            <styleD.FindMyIdBorder>
                <styleD.FindMyIdTitle>비밀번호 변경</styleD.FindMyIdTitle>
                <styleD.FindMyIdHr />
                <styleD.FindMyIdContent>
                    <div>
                        <styleD.NameInput>
                            <p>아이디</p>
                            <input type="text" placeholder="아이디를 입력해주세요." onChange={onChangeId} />
                        </styleD.NameInput>
                        <styleD.NumberInput>
                            <p>이름</p>
                            <input type="text" placeholder="이름을 입력해주세요." onChange={onChangeName} />
                        </styleD.NumberInput>
                        <styleD.NumberInput>
                            <p>전화번호</p>
                            <input type="number" placeholder="전화번호를 입력해주세요." onChange={onChangePhoneNumber} />
                        </styleD.NumberInput>
                        <styleD.PasswordInput>
                            <p>비밀번호</p>
                            <input type="password" placeholder="새로운 비밀번호 입력해주세요." onChange={onChangePassword} />
                        </styleD.PasswordInput>
                        <div style={{ marginLeft: '160px' }}>
                            {passwordCheck()}
                        </div>
                        <div style={{height: '50px'}}>
                            <styleD.PasswordInput>
                                <p>비밀번호확인</p>
                                <input type="password" placeholder="다시 새로운 비밀번호 입력해주세요." onChange={onChangeConfirmPassword} />
                            </styleD.PasswordInput>
                            <div style={{ marginLeft: '160px' }}>
                                {passwordDoubleCheck()}
                            </div>
                        </div>



                        <div style={{marginLeft: '165px', marginTop: '10px'}}>
                            <a href="/LoginPage">로그인으로 돌아가기</a>
                            <styleD.FindMyIdButton type="submit" onClick={postChangePassword}>다음</styleD.FindMyIdButton>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <styleD.FindMyIdVideo autoPlay muted src="/source/recaptcha.mp4" />
                    </div>
                </styleD.FindMyIdContent>

            </styleD.FindMyIdBorder>
        </>
    )
}
