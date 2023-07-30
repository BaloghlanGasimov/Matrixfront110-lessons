import React from 'react'
import data from '../data'
import SingleCard from '../SingleCard';



const Shop = () => {

    console.log(data);
  return (
    <div>

        <div className="container">
            <div className="top-part">
            <div className="dropdown">
  <button
    className="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    12
  </button>
  <ul className="dropdown-menu">
    <li>
      <a className="dropdown-item" href="#">
        24
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        36
      </a>
    </li>
    
  </ul>
</div>
<div className="dropdown">
  <button
    className="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Default Sorting
  </button>
  <ul className="dropdown-menu">
    <li>
      <a className="dropdown-item" href="#">
        Sort by Price (low to high)
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Sort by Price (high to low)
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Sort by latest
      </a>
    </li>
  </ul>
</div>
            </div>
        <div className="umumi">
            <div className="left-part">

            </div>
            <div className="right-part">
                
                <div className="row">

                {data.map((item)=>{
                  return(
                    <SingleCard key={item.id} alldata={item} id={item.id} image={item.image} title={item.name} price={item.price} />
                  )
                })}

                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Shop