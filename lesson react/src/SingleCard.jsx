import React from 'react'

const SingleCard = ({img,name,price,category}) => {

  return (
    <div>

            <div className="card" >
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{category}</p>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{price}$</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>


    </div>
  )
}

export default SingleCard