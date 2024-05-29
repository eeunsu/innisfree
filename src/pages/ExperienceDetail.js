import AuthorDetailCard from "../component/AuthorDetailCard";
import { useParams, useNavigate } from "react-router-dom";

function ExperienceDetail({ pic }) {
  let { id } = useParams();
  console.log(id)

  const navigate = useNavigate();
  const goToSub2 = () => {
    navigate('/sub2/sub2-2')
  }
  return (
    <div className='container authorList'>
      <h2 className='mb30'>자세히 보기</h2>
      <p className="desc mb30">{pic[id].authorInfo}</p>
      <AuthorDetailCard pic={pic} id={parseInt(id, 10)} />

      <div className="event">
        <button type='button' onClick={goToSub2}>체험단 신청 바로가기</button>
      </div>
      <div className='container author'>
        <div className="artRental">
          <h4>당신의 피부, <span>이니스프리와 완전히 새롭게</span></h4>
          <ul className="artRental_diff">
            <li>
              <img src={process.env.PUBLIC_URL + '/img/service_box1_item1.png'} />
              <strong>큰 돈 쓰지 않아도 <span>쉽게 바뀌는 피부</span></strong>
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/img/service_box1_item2.png'} />
              <strong>아무나 따라올 수 없는<span>원영이 피부</span></strong>
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/img/service_box1_item3.png'} />
              <strong>실패 없는 구매를 위한 <span>사전 탐색</span></strong>
            </li>
            <li>
              <img src={process.env.PUBLIC_URL + '/img/service_box1_item4.png'} />
              <strong>배송비 걱정 없는 <span>편리한 서비스</span></strong>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetail