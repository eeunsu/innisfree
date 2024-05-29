import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import ExperienceDetail from './ExperienceDetail';
import ExperienceInfo from './ExperienceInfo';
import Experience from './Experience';


const Sub2 = ({ pic, showButton, btnDataClick }) => {  
  return (
    <>
      <div className='container author_wrap'>        
        <Routes>
          <Route path='/*' element={<ExperienceInfo pic={pic} showButton={showButton} btnDataClick={btnDataClick} />}></Route>
          <Route path='sub2-1/:id' element={<ExperienceDetail pic={pic} showButton={false} btnDataClick={btnDataClick} />}></Route>
          <Route path='sub2-2' element={<Experience />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default Sub2