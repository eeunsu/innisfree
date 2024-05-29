import React from 'react';
import Card from '../component/Card';

const Homepage = ({ pic, showButton, btnDataClick }) => {
    return (
        <div className='container home'>
            <div className='main-bg'>
                <h1>INNISFREE</h1>
                <p>원영이의 비타C 잡티 토닝 <br />광고를 만나보세요!</p>
            </div>

            <div className="row pic-area">
                {
                    pic.map((item, i) => (
                        <Card
                            key={i}
                            item={item}
                            imgSrc={`/img/img${i + 1}.jpg`}
                            id={i}
                        />
                    ))
                }
            </div>


            {/* 상품더보기 버튼 */}
            {
                showButton && (
                    <button className="btn-data" onClick={btnDataClick} disabled={!showButton}>상품 더보기 </button>
                )
            }
        </div>
    )

}

export default Homepage;
