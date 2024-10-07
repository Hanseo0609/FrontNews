import * as styleD from '../styles/FindMyId';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';

export default function FindMyId() {
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
                            <input type="text" placeholder="이름을 입력해주세요." />
                        </styleD.NameInput>
                        <styleD.NumberInput>
                            <p>전화번호</p>
                            <input type="number" placeholder="전화번호를 입력해주세요." />
                        </styleD.NumberInput>
                        <div>
                            <a href="/Login" style={{ marginLeft: '5%' }}>로그인으로 돌아가기</a>
                            <styleD.FindMyIdButton type="submit">다음</styleD.FindMyIdButton>
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
