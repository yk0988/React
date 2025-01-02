import './App.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import data from './db/shop'; // 상품 목록 데이터
import Products from './components/Products'; // 제품 컴포넌트
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'; // 라우팅 관련
import Detail from './components/Detail'; // 상세 페이지 컴포넌트
import Title from './components/Title'; // 타이틀 컴포넌트
import Title2 from './components/Title2'; // 타이틀2 컴포넌트
import inice from './db/inice'; // 다른 데이터 (예: nice 목록)
import ComNice from './components/ComNice'; // ComNice 컴포넌트 임포트


function App() {
  // 상태 관리: shoplist만 사용 : 현재 상태 값 = 상품 목록
  let [shoplist, setShop] = useState(data);
  let navigate = useNavigate(); // navigate 함수 정의
  let [nice, setNice] = useState(inice); // nice 상태

  function About() {
    return (
      <>
        <h4>회사 정보임</h4>
      </>
    );
  }

  return (
    <div className="App">
      {/* 네비게이션 바 */}
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">슈마커</Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{ navigate('/detail/0')}}>Detail</Nav.Link>
              <Nav.Link onClick={() => { navigate('/Cart') }}>Cart</Nav.Link> 
              <Nav.Link onClick={() => { navigate('/About') }}>About</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>

      {/* 라우팅 설정 */}
      <Routes>
        {/* 메인 페이지 - 제품 목록 */}
        <Route
          path="/"
          element={
            <div>
              <div className="slider">
                {/* 슬라이더 콘텐츠를 여기에 추가할 수 있습니다 */}
              </div>
              <Title /> {/* 타이틀 컴포넌트 */}

              <div className="container" style={{ marginTop: '20px' }}>
                <div className="row">
                  {/* 이름순, 가격순 정렬 버튼 */}
                  <div style={{ textAlign: 'center' }}>
                    <Button
                      variant="outline-primary"
                      onClick={() => {
                        let copy3 = [...shoplist].sort((a, b) =>
                          a.title > b.title ? 1 : -1
                        );
                        setShop(copy3);
                      }}
                    >
                      이름순 정렬
                    </Button>{' '}
                    <Button
                      variant="outline-secondary"
                      onClick={() => {
                        let copy4 = [...shoplist].sort((a, b) =>
                          a.price > b.price ? 1 : -1
                        );
                        setShop(copy4);
                      }}
                    >
                      낮은가격순 정렬
                    </Button>{' '}
                    <Button
                      variant="outline-success"
                      onClick={() => {
                        let copy5 = [...shoplist].sort((a, b) =>
                          b.price > a.price ? 1 : -1
                        );
                        setShop(copy5);
                      }}
                    >
                      높은가격순 정렬
                    </Button>{' '}
                    <p></p>
                  </div>

                  {/* 상품 목록 출력 */}
                  {shoplist.map((ele) => {
                    return (
                      <Products
                        shop={ele} // 각 제품의 정보를 전달
                        key={ele.id} // 고유 key 값으로 ele.id 사용
                      />
                    );
                  })}

                  {/* Title2 컴포넌트와 버튼 추가 */}
                  <div style={{ textAlign: 'center' }}>
                    <Title2 />
                    <Button variant="outline-success">+ 3개 상품 더 보기</Button>{' '}
                  </div>

                  {/* nice 배열을 map해서 ComNice 렌더링 */}
                  <div className="container" style={{ marginTop: '30px' }}>
                  <div className="row">
                    {nice.slice(0, 3).map((ele, i) => {  // nice 배열에서 첫 3개 항목만 선택
                      return <ComNice nice={ele} key={ele.id} />;
                    })}
                  </div>
                </div>
                </div>
              </div>
            </div>
          }
        />

        {/* 상세 페이지 - 동적 경로 */}
        <Route path="/detail/:id" element={<Detail shop={shoplist} />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/member" element={<Member />} />
        <Route path="/about/location" element={<Location />} />
      </Routes>
    </div>
  );
}




function Member() {
  return (
    <>
      <h4>Member</h4>
    </>
  );
}

function Location() {
  return (
    <>
      <h4>Location</h4>
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
