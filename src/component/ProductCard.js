import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }

  const pickIsTrue = () => {
    return item.choice ? true : false
  }

  return (
    <div className='product-card' onClick={showDetail}>
      <img src={item?.img} />
      <div className="brandname"><b>{item?.brand}</b></div>
      <div className={`pickbox${pickIsTrue ? "_switched" : ""}`}>{item?.choice == true ? "[MD PICK]" : ""}</div>
      <div className='nametext'>{item?.title}<h className='new-text'>{item?.new == true ? "NEW" : ""}</h></div>
      <div className={`price`}>₩{item?.price}</div>
      <div className='saleprice'><b className={'saleper'}>{Math.round((item?.price - item?.saleprice) / item?.price * 100)}%</b> ₩{item?.saleprice}</div>

    </div >
  )
}

export default ProductCard
