import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {

  // localStorage.setItem("admin","new")

  useEffect(()=>{
    if(localStorage.getItem("admin")==undefined){
      localStorage.setItem("admin","Login")
    }
  },[])
  
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
        <LinkContainer to="/">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" >
                Home
            </a>
            </li>
        </LinkContainer>
        <LinkContainer to='/shop'>
            <li className="nav-item">
            <a className="nav-link" >
                Shop
            </a>
            </li>
        </LinkContainer>
        <LinkContainer to='/blog'>
            <li className="nav-item">
            <a className="nav-link" >
                Blog
            </a>
            </li>
        </LinkContainer>
        <LinkContainer to='/about'>
            <li className="nav-item">
            <a className="nav-link" href="/about">
                About
            </a>
            </li>
        </LinkContainer>
        <LinkContainer to='/contact'>
        <li className="nav-item">
          <a className="nav-link">
            Contact
          </a>
        </li>
        </LinkContainer>
      </ul>
      <button className='me-5 btn btn-success'>
        {/* {localStorage.getItem("admin")} */}
    {/* { ? :} */}
        {localStorage.getItem("admin")=="Login" ? 
        <>

          <LinkContainer to='/login'>
        <p>Login</p>
          </LinkContainer>
        
        </>
        : 
          
        <>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {localStorage.getItem("admin")}
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Istifadeciye bax</a></li>
    <Link to="/login">
    <li><a class="dropdown-item" href="#">Istifadecini deyis</a></li>
    </Link>
    <li><a class="dropdown-item" href="#" onClick={()=>{localStorage.setItem("admin","Login");window.location.reload(false);}} >Cixis et</a></li>
  </ul>
</div>
        </> }

      </button>
    </div>
  </div>
</nav>

        
    </div>
  )
}

export default Header