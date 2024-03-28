import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  // 로그인 클릭시, authenticate -> true & 메인 페이지로 이동
  const loginUser = () => {
    console.log("login user function issue");
    setAuthenticate(true);
    navigate("/");
  }

  return (
    <div>
      <div className='login-text'>LOGIN</div>
      <div className='line' />
      <div className='login-area'>
        <div className='id-text'>아이디 <input placeholder='이메일 아이디를 @까지 정확하게 입력하세요' /></div>
        <div>비밀번호 <input type="password" placeholder='비밀번호를 입력해주세요' /></div>
        <button className='login-click' onClick={loginUser}>로그인</button>
      </div>
    </div>
  )
}

export default Login
