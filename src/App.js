import React, { createContext, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/reset.css';
import './css/fonts.css';
import './App.css';

import data from './data';
import Homepage from "./pages/Homepage";
import Sub1 from "./pages/Sub1";
import Sub2 from "./pages/Sub2";
import Sub3 from "./pages/Sub3";
import Page404 from "./pages/Page404";
import Experience from "./pages/Experience";
import ExperienceInfo from "./pages/ExperienceInfo";

//context 문법 1
export let Context1 = createContext(); //state 보관함

function App() {
  let navigate = useNavigate();
  let [pic, setPic] = useState(data);
  console.log(pic)
  let [showButton, setShowButton] = useState(true)

  //useContext에서 사용할 state
  let [stock, useStock] = useState([10,15,20]); //sub1, Tabcontent에서 사용
  const goToSub1 = (id) => {
    navigate(`/sub1/${id}`)
  }

  //axios로 데이터 요청
  const fetchData =()=> {
    axios.get("https://raw.githubusercontent.com/HeoSsaM/shop2/main/data2.json")
    .then ((result)=> {
      //console.log(result.data);
      let copy = [...pic, ...result.data]; 
      setPic(copy)

      if (result.data.length == 0) {
        setShowButton(false);
      }
    })
    .catch (()=> {
      console.log("실패")
    })
  }

  //상품더보기 버튼을 클릭하면 실행되는 함수
  const btnDataClick = () => {
    fetchData();
    setShowButton(false);
  }

  return (
    <div className="wrap">
      <div className="nav-wrap">
        <Navbar bg="dark" variant="dark">
          <div className="gnb-area">
            <Navbar.Brand href="/" className="logo">
            <img src={process.env.PUBLIC_URL + '/img/logo_innisfree.png'} />
            </Navbar.Brand>
            <Nav className="me-auto gnb">
              <Nav.Link onClick={()=>goToSub1(0)}>자세히보기</Nav.Link>
              {/* sub2 서브메뉴 */}
              <NavDropdown title="꿀템" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => navigate("/sub2/sub2-1")}
                  className="nav-submenu" >
                  HOT ITEM
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => navigate("/sub2/sub2-2")}
                  className="nav-submenu">
                  체험단 모집
                </NavDropdown.Item>
              </NavDropdown>   

              <Nav.Link href="/sub3">이벤트</Nav.Link>           
            </Nav>
          </div>
        </Navbar>
      </div>
      {/* //navbar */}

      <Routes>
      <Route path="/" element={<Homepage pic={pic} showButton={showButton} btnDataClick={btnDataClick} />} />
      <Route path="/sub1/:id" element={< Sub1 pic={pic} />} /> 
        
        <Route path="/sub2/*" element={<Sub2 pic={pic} showButton={showButton} btnDataClick={btnDataClick} />} >
          <Route path="sub2-1" element={ <ExperienceInfo pic={pic} />}></Route>
          <Route path="sub2-2" element={ <Experience />}></Route>
        </Route>
        <Route path="/sub3" element={<Sub3 />}/>
        <Route path="*" element={<Page404 />}/>
      </Routes>
    </div>
  );
}

export default App;
