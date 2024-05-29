import React from 'react';
import { useState, useEffect } from 'react';

const Sub3 = () => {

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);

  useEffect(() => {

    let a = setTimeout(() => { setAlert(false) }, 5000);
    console.log(2);

    return () => {
      clearTimeout(a);
      //기존 데이터 요청은 제거해주세요
    }
  }, [count])
  return (
    <div className='event_wrap'>
      <div className='event_bg'>
        <strong>내 인생 <br />첫 체험단 시작</strong>
        <p>신규 체험가 30,000원</p>
      </div>
      {
        alert === true
          ? <div className='alert alert-danger'>5초 이내 구매시 20% 할인</div>
          : null
      }
      <div className="contents">
        <p className="title">오늘이 지나면 <br />사라지는 할인 혜택</p>

        <div className="event_cont event_cont01">
          <p>리뉴얼 제품, <br />내가 먼저 써보자!<span>전부 30,000원/<em>월</em></span></p>
        </div>

        <div className="event_cont event_cont02">
          <p>택배비<br />신규 고객이면<span>전액 면제!</span></p>
        </div>

        <div className='event_bottom_text'>
          <p className="title">소중한 피부<br />이니스프리 체험단으로 완전 새롭게</p>
          <p className="desc">우리 모두 예뻐지는 그날까지! <br/>이니스프리 뷰티 체험단은 늘 함께합니다:)</p>
          <button>체험단 신청하기</button>
        </div>
      </div>
    </div>
  )
}

export default Sub3