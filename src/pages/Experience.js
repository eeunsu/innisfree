import React from 'react';
import subBg from './img/sub_main02.jpg'

const Experience = () => {
  return (
    <div>
      <div className='subBg' style={{
        backgroundImage: `url(${subBg})`,
      }}>
        <div>
          <h2>체험단 모집</h2>
          <p>원영이와 함께해요♥</p>
        </div>
      </div>

      <div className="detail_info">
        <h3>모집분야</h3>
        <h4>모든 상품</h4>
        <p>* 이니스프리 전 상품 최대 5개 제공</p>
      </div>
      <div className="detail_info">
        <h3>지원대상</h3>
        <h4>* SNS / BLOG 활발히 활동하시는 분!</h4>
        <p>* 팔로우, 팔로워 5000이상</p>
      </div>
      <div className="detail_info">
        <h3>지원방법</h3>
        <h4>신청서, 포트폴리오를 이메일로 제출</h4>
        <ol>
          <li>이메일 : joeunsu00@naver.com</li>
          <li>신청서 : 아래 파일을 다운로드하여 작성 후 제출</li>
          <li>포트폴리오 : SNS활동, 사진실력, 필력, 블로그 등</li>
        </ol>
      </div>
      <div className="bottom_text">
        결과 안내는 보내주신 포트폴리오를 내부에서 검토 후 개별적으로 연락드리고 있습니다. <br />
        검토 후 결과 안내까지는 최대 1-2주 정도 소요됩니다.
      </div>

    </div>
  )
}

export default Experience