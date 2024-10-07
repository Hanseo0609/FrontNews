import * as styleD from '../styles/CommunityPreview';
import { Link } from "react-router-dom";

export default function CommunityPreview() {
  return (
    <div style={{ height: '600px' }}>
      <styleD.MainContentText>
        <Link to='/CommunityMainPage' style={{ textDecoration: 'none', color: 'black' }}>게시판</Link>
      </styleD.MainContentText>
      <styleD.MainContentBox>
        <styleD.CommunityBox>
          <p>와 음바페 미쳤는데???</p>
          <p>메시메시</p>
        </styleD.CommunityBox>

        <styleD.CommunityBox>
          <p>요즘 개발자 시장 어때요??</p>
          <p>개발자유망주</p>
        </styleD.CommunityBox>

        <styleD.CommunityBox>
          <p>나는 대통령으로 이 사람이 맞다고 생각함</p>
          <p>정치의신</p>
        </styleD.CommunityBox>
      </styleD.MainContentBox>
    </div>
  )
}
