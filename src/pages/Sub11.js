import React, {useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav, Link } from 'react-bootstrap';
import { Context1 } from "../App";

//sub1 component
const Sub11 = ({ pic }) => {

    let {stock} = useContext(Context1);
    console.log(stock)

  let { id } = useParams(); //window.location에 있는 주소값에서 유저가 선언한 파라메터만 추출하는 함수(예: /sub1/:id);
  let [tabs, setTabs] = useState(0); //tab 메뉴의 기본상태가 0

  return (
    <div className="container picture">
      <div className="row">
        <h2>STAY MIND</h2>
        <p className="small-title">
          <span>스테이 마인드가 제안하는 작품을 감상하고 렌탈해보세요</span>
        </p>
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
          <p className="price">{pic[id].price}</p>
          <button className="btn btn-danger">렌탈하기</button>
        </div>
      </div>

      <div className="tab-menu">
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0" onClick={() => setTabs(0)}>같은 작가의 작품</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" onClick={() => setTabs(1)}>AI 추천</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2" onClick={() => setTabs(2)}>금주 베스트</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* 삼항연산자 조건식?true:false */}
        {/* {
            tabs === 0 ? <div> 내용 0 </div>:null
          }
          {
            tabs === 1 ? <div> 내용 1 </div>:null
          }
          {
            tabs === 2 ? <div> 내용 2 </div>:null
          }
        */}
        <TabContent tabs={tabs}  />
      </div>
    </div>
  )
};

//tab-content를 component로 선언
function TabContent({ tabs }) {
  let [fade, setFade] = useState(''); //기본 fade 상태를 선언
  let {stock} = useContext(Context1)

  useEffect(()=>{
    setTimeout(() => { setFade('end')}, 300)
    //setFade('end')

    //clean up function -> useEffect 실행 전에 먼저 실행하는 구문
    return () => {
      setFade('')
    }
  }, [tabs])

  if (tabs == 0) {
    return (
      <div className="tab-content">
        {stock}
        <ul className={'start ' + fade}>
          <li>나에게 묻는 나의 길_ My Question, My Way Ⅱ</li>
          <li>하늘이 파래서 다행이야_Good Thing it’s a Blue Sky</li>
          <li>구름나무_Cloud Tree</li>
        </ul>
      </div>
    )  //component 이므로 반드시  return문     
  } else if (tabs == 1) {
    return (
      <div className="tab-content">
        <ul className={'start ' + fade}>
          <li>나에게 묻는 나의 길_ My Question, My Way Ⅱ</li>
          <li>Palm to palm_07 – 새가 둥지를 떠나 듯</li>
          <li>여우와 아이</li>
        </ul>
      </div>
    )
  } else if (tabs == 2) {
    return (
      <div className="tab-content">
        <ul className={'start ' + fade}>
          <li>낮은 언덕 ( a low hill)</li>
          <li>마음에 관하여듯</li>
          <li>Trash 002 외계인을 잡았어</li>
        </ul>
      </div>
    )
  }
  //return [<div>내용1</div>,<div>내용2</div>,<div>내용2</div> ][tabs]
}



export default Sub11