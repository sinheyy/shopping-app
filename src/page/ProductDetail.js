import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

const ProductDetail = () => {
  let { id } = useParams();   // parameter를 읽어올 수 있음
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductDetail()
  }, [])

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/sinheyy/shopping-app/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();

    console.log(data);
    setProduct(data);
  }

  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}</div>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              SIZE
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
