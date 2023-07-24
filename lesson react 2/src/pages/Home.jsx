import React from 'react'
import { Button } from 'react-bootstrap';

import Dropdown from 'react-bootstrap/Dropdown';


const Home = () => {
  return (
    <div>

<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <button className='btn btn-primary' >salam</button>

    <Button variant='danger' >React bootstrap istifade etdik</Button>

    </div>
  )
}

export default Home