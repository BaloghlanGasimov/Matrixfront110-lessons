import React from 'react'
import { CartProvider, useCart } from "react-use-cart";
const Header = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  return (
    
    <div>

<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/shop">
            Shop
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/contact">
            Contact
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/blog">
            Blog
          </a>
        </li>
        
        
           
        
      </ul>
      <div className="d-flex">
        
        <a href="/cart">

        <button className="btn btn-outline-success" type="submit">
          Cart ({totalUniqueItems})
        </button>

        </a>
      </div>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Header