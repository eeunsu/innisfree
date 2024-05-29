import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthorCard from '../component/AuthorCard';


const ExperienceInfo = ({ pic, showButton, btnDataClick }) => {
  
  const navigate = useNavigate();

  const goToSub2 = (id) => {
    navigate(`/sub2-1/${id}`)
  }

  return (
    <>
      <div className='container authorList'>
        <h2 className='mb30'>HOT ITEM 소개</h2>
        <p className="desc mb30">INNISFREE에서 후기 5000~ 이상인 핫 꿀템만 소개합니다!</p>

        <div className='authcard_wrap'>
          {
            pic.map((item, i) => (
              <AuthorCard key={i} item={item} id={i} onClick={goToSub2} index={i} />
            ))
          }
        </div>
      </div>

      {/* 상품더보기 버튼 */}
      {
        //버튼이 활성화되었을 때만 클릭 가능하도록 설정
        showButton && (
          <button className="btn-data" onClick={btnDataClick} disabled={!showButton}>상품 더보기 </button>
        )
      }
    </>


  )
}

export default ExperienceInfo