import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
  const productList = useSelector(state => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();


  const getProducts = () => {
    console.log("product list!!!!", productList);
    let searchQuery = query.get('q') || "";   // q로 시작하는 쿼리를 가져다가 searchQuery에 넣음
    let fieldQuery = query.get('field') || "";
    //console.log("query : ", searchQuery);

    // 미들웨어 부르기
    dispatch(productAction.getProducts(searchQuery, fieldQuery));
  }


  useEffect(() => {
    getProducts();
  }, [query])
  // useEffect() - 배열이 빈 값이면 프로그램이 실행될 때 한 번만 실행된다
  // query값이 바뀔 때마다 호출되려면? 배열에 query를 넣기 -> query가 바뀌면 다시 호출해라!

  return (
    <div>
      <Container>
        <Row>
          {productList?.map((menu) => (
            <Col lg={3}><ProductCard item={menu} /></Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll
