import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import PrivateRoute from './route/PrivateRoute';

// steps
// 1. 전체 상품 페이지, 로그인, 상품 상세 페이지
// 1-1. 네비게이션 바 만들기
// 2. 전체 상품 페이지 - 전체 상품을 봄
// 3. 로그인 버튼 클릭 -> 로그인 페이지
// 4-1. 상품 디테일 클릭? 로그인 안 될 경우 -> 로그인 페이지 먼저 나옴
// 4-2. 로그인 -> 상품 디테일 페이지
// 5-1. 로그아웃 버튼 클릭 -> 로그아웃이 됨
// 5-2. 로그아웃 상태 -> 상품 디테일 볼 수 없음, 다시 로그인 페이지
// 6. 로그인 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보임
// 7. 상품을 검색할 수 있음
function App() {
  const [authenticate, setAuthenticate] = useState(false);  // true - 로그인, false - 로그인 안 됨

  // authenticate 값이 변할 때마다 출력
  useEffect(() => {
    console.log("auth : ", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} Component={ProductDetail} />} />
      </Routes>
    </div>
  );
}

export default App;
