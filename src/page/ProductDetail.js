import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDispatch } from 'react-redux';
import { productAction } from '../redux/actions/productAction';
import { useSelector } from 'react-redux';

const ProductDetail = () => {
  const product = useSelector(state => state.product.selected);
  let { id } = useParams();   // parameter를 읽어올 수 있음
  const dispatch = useDispatch();

  useEffect(() => {
    getProductDetail()
  }, [])

  const getProductDetail = () => {
    dispatch(productAction.getProductDetail(id));
  }

  const pickIsTrue = () => {
    return product.choice ? true : false
  }

  return (
    <Container className='detail-product'>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col>
          <div className='detail-product-brand'><b>{product?.brand}</b></div>
          <div className={`pickbox${pickIsTrue ? "_switched" : ""}`}>{product?.choice == true ? "[MD PICK]" : ""}</div>
          <div className='detail-product-title'>{product?.title}<h className='detail-product-new'>{product?.new == true ? "NEW" : ""}</h></div>
          <div><h className='detail-product-star'><b> ★★★★☆ </b></h><h><b> 4.5 </b></h><h><u> 2,022개 리뷰 </u></h></div>
          <div className='detail-product-price'>정상가<h> {product?.price} 원 </h></div>
          <div className='detail-product-saleprice'>할인가<b> {product?.saleprice} </b>원 <b className='detail-product-saleper'>{Math.round((product?.price - product?.saleprice) / product?.price * 100)}%</b></div>
          <div className='detail-line' />
          <Dropdown size="sm">
            <h>색상</h>
            <Dropdown.Toggle variant="none" id="dropdown-basic">
              COLOR
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {product?.color.map((p) => (
                <Dropdown.Item>{p}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown size="sm">
            <h>사이즈</h>
            <Dropdown.Toggle variant="none" id="dropdown-basic">
              SIZE
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product?.size.map((p) => (
                <Dropdown.Item>{p}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <button className='buy-click'>바로 구매</button>
          <button className='cart-click'>쇼핑백 담기</button>
        </Col>
      </Row>
      <Row>
        <Container>
          <Row className='product-detail-ex'>DETAIL</Row>
          <Row>
            <img src={product?.detail} />
          </Row>
        </Container>

      </Row>
    </Container>
  )
}

export default ProductDetail
