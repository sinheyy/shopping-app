import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { authenticateAction } from '../redux/actions/authenticateAction';
import { useDispatch } from 'react-redux';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 로그인 클릭시, authenticate -> true & 메인 페이지로 이동
  const loginUser = (event) => {
    console.log("login user function issue");
    event.preventDefault();

    dispatch(authenticateAction.login(email, password))
    navigate("/");

  }

  return (
    <div>
      <div className='login-text'>LOGIN</div>
      <div className='line' />
      <Container id='login-area'>
        <Form className='login-form' onSubmit={(event) => loginUser(event)}>
          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Form.Label column sm="4">이메일 아이디</Form.Label>
            <Col sm="8">
              <Form.Control className="form-input" type="email" placeholder="이메일 아이디를 @까지 정확하게 입력하세요" onChange={(event)=>setEmail(event.target.value)} required ></Form.Control>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
            <Form.Label column sm="4">비밀번호</Form.Label>
            <Col sm="8">
              <Form.Control className="form-input" type="password" placeholder="비밀번호를 입력해주세요" onChange={(event)=>setPassword(event.target.value)} required />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formBasicCheckbox">
            <Form.Check column sm="6" className='login-check' type="checkbox" label="이메일 아이디 저장" />
            <Col sm="6" className='login-find'>
              아이디 찾기 | 비밀번호 찾기
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm="4"></Col>
            <Col sm="4">
              <Button className='login-click' type="submit">
                로그인
              </Button>
            </Col>
            <Col sm="4"></Col>

          </Form.Group>

        </Form>
      </Container>
    </div>
  )
}

export default Login
