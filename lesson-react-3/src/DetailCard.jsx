import React from 'react'
import data from './data'
import { useParams } from 'react-router-dom'

const DetailCard = () => {

    const { id } =useParams();
    const product = data.find((p) => p.id == id)
  return (
    <div>

        <div className="wrapper">
            <div className="ortalama-90">
                <img src={product.image} alt="" />
                <div className="text-part">
                    <p className='name'>Name: {product.name}</p>
                    <p className='brand' >Brand: {product.brand}</p>
                    <p className='price'>Price: {product.price}</p>

                <button className='btn btn-success'>Add to cart</button>
                </div>
                

            </div>

        </div>
    </div>
  )
}

export default DetailCard