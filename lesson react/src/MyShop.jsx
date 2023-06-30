import React, { useEffect, useState } from 'react'
import { clothes } from './data'
import SingleCard from './SingleCard';

const MyShop = () => {
    
  console.log(clothes);

  const [filterCategory,setFilterCategory] = useState("men");
  
  const changemen=()=>{
    setFilterCategory("men")
  }
  const changewomen=()=>{
    setFilterCategory("women")
  }

  const product = clothes.filter(p=>p.category==filterCategory);

  console.log(product);

  return (
    <div>

<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    <button onClick={changemen} className='btn btn-primary my-3 ms-3 me-3'>MEN</button>
    <button onClick={changewomen} className='btn btn-primary'>WOMEN</button>


<div className="row">
    {product.map((item,i)=>{
      return(
        <div className="col-12 col-md-4">
        <SingleCard category={item.category} name={item.name} price={item.price} />
        </div>
      )
    })}
</div>
    </div>
  )
}

export default MyShop
