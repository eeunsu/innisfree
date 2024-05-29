import React, {useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Nav, Link } from 'react-bootstrap';
import tabImg01 from './img/img_review01.jpg';
import tabImg02 from './img/img_review02.jpg';
import tabImg03 from './img/img_review03.jpg';

//sub1 component
const Sub1 = ({ pic }) => {
  let { id } = useParams();
  let [tabs, setTabs] = useState(0);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  return (
    <div className="container picture">
        <div className="title-area">
          <h2>INNISFREE</h2>
          <p className="small-title">
            <span>이니스프리가 제안하는 상품 믿고 구매해보세요!</span>
          </p>
        </div>
        <div className="col-md-6 img">
          <img
            src={`${process.env.PUBLIC_URL}/img/img${parseInt(id) + 1}.jpg`}
            alt={pic[id].title}
          />
        </div>

        <div className="col-md-6 picture-info">
          <p className="pt-4 title">{pic[id].title}</p>
          <p className="author">{pic[id].author}</p>
          <p className="content">{pic[id].content}</p>
          <p className="price">{(pic[id].price).toLocaleString()}</p>
          <button className="btn btn-danger" onClick={()=>{navigate('/cart'); 
          }}>구매하기</button>
        </div>


      <div className="tab-menu">
        <h2>체험단 후기</h2>
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={() => setTabs(0)}>20대</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={() => setTabs(1)}>30대</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={() => setTabs(2)}>40대</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tabs={tabs} />
      </div>
    </div>
  )
};

//tab-content를 component로 선언
function TabContent({ tabs }) {
  let [fade, setFade] = useState(''); 

  useEffect(()=>{
    setTimeout(() => { setFade('end')}, 300)

    return () => {
      setFade('')
    }
  }, [tabs])

  if (tabs == 0) {
    return (
      <div className="tab-content">
        <figure><img src={tabImg01} alt="" /></figure>
        <p className="review_title">최*나님, 경기 김포시 <br />첫구매 고객</p>
        <p className="review_text">이름만 봐도 제형이 엄청 꾸덕하고 무거울 것 같은 그런 제품이지만, 실제로 사용하면 전혀 다릅니다. 가볍고 촉촉해서 데일리로 바르기 좋아요!</p>
      </div>
    )  
  } else if (tabs == 1) {
    return (
      <div className="tab-content">
        <figure><img src={tabImg02} alt="" /></figure>
        <p className="review_title">이*진님, 서울 용산구 <br />2번째 고객</p>
        <p className="review_text">계속 재구매하게 되는 콜라겐 크림!민감성 트러블성 피부에 건조함까지 더해지니까 더 예민해지더라구요.그래서 콜라겐 크림을 발라봤는데 수분감과 탄력감을 채워져서 예민한 피부를 촉촉하고 건강하게 바꿔주더라구요.</p>
      </div>
    )
  } else if (tabs == 2) {
    return (
      <div className="tab-content">
        <figure><img src={tabImg03} alt="" /></figure>
        <p className="review_title">한*석님, 인천 연수구 <br />체험단</p>
        <p className="review_text">나왔다ㅋ이니스프리 대박템ㅋ 환절기만 되면 심해지는 속건조에 좋다는 제품은 다 써 본 사람입니다.. 체험단 모집 소식을 듣고 별 기대없이 신청했는데 이럴수가..!! 피부결이 매끄러워지고 탱탱해진게 느껴져서 정말 좋아요 뭘 해도 푸석했던 제 피부가 요즘 이 제품 덕분에 생기가 도는것 같아 너무 행복합니다🌱</p>
      </div>
    )
  }
}



export default Sub1