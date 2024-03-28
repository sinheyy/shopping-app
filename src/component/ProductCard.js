import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }

  return (
    <div className='product-card' onClick={showDetail}>
      <img src={item?.img} />
      <div>{item?.brand}</div>
      <div>{item?.choice == true ? "PICK" : ""}</div>
      <div>{item?.title}</div>
      <div className='price'>₩{item?.price}</div>
      <div className='saleprice'>₩{item?.saleprice} <b className='saleper'>{Math.round((item?.price - item?.saleprice) / item?.price * 100)}%</b></div>
      <div>{item?.new == true ? "NEW" : ""}</div>
    </div>
  )
}

export default ProductCard
