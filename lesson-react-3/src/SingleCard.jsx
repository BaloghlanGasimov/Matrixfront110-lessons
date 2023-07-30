import React from 'react'
import { Link } from 'react-router-dom'
import { CartProvider, useCart } from "react-use-cart";

const SingleCard = ({alldata,id,image,title,price}) => {
  const { addItem } = useCart();

  return (
    <div className="col-12 col-md-4">
        <Link to={`/shop/${id}`} >
    <div className="card">
  <img src={image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">
      {price}
    </p>
    <button className="btn btn-primary" onClick={() => addItem(alldata)} >
      Add to cart
    </button>
  </div>
  </div>
    </Link>
</div>

  )
}

export default SingleCard